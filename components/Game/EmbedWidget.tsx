import styled from '@emotion/styled'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import { useFullscreen } from 'ahooks'
import { gameProjectPlayer } from 'api'
import BigNumber from 'bignumber.js'
import { utils } from 'ethers'
import { getAddress } from 'ethers/lib/utils'
import { useBuyNow } from 'hooks/useBuyNow'
import { ERC20MulticallTokenResult } from 'hooks/useERC20Multicall'
import { isEmpty } from 'lodash'
import { FC, useCallback, useEffect } from 'react'
import { useRef, useState } from 'react'
import stylesCommon from 'styles/common.module.scss'
import styles from 'styles/game/id.module.scss'
import { GameEntity } from 'types'
import { PriceEntity } from 'types'
import { PaymentMode } from 'types/enum'
import { balanceDecimal } from 'utils'

const Wrapper = styled.div`
  max-width: 640px;
  height: 480px;
  background: #e5e5e5;
  margin: 0 auto;
  position: relative;
  background-position: 50% 50%;
  @media screen and (max-width: 640px) {
    height: 80vw;
  }
`

interface Props {
  readonly gameProject: GameEntity
  readonly price: PriceEntity
  readonly priceToken?: ERC20MulticallTokenResult
}

const EmbedWidget: FC<Props> = ({ gameProject, price, priceToken }) => {
  const { buyNow } = useBuyNow()
  const ref = useRef(null)
  const [isFullscreen, { enterFullscreen, exitFullscreen }] = useFullscreen(
    ref,
    {
      onExit: () => {
        // console.log('exit')
        if ('keyboard' in navigator && 'lock' in navigator.keyboard) {
          navigator.keyboard.unlock()
        }
      },
    }
  )
  // Adapt to IOS
  const [gameFullscreen, setGameFullscreen] = useState<boolean>(false)
  const [runGameFlag, setRunGameFlag] = useState<boolean>(false)
  // hold unlock
  // false can play
  // true can't play
  const [holdUnlock, setHoldUnlock] = useState<boolean>(true)

  const handleFullscreen = useCallback(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Lock
    if (isFullscreen) {
      exitFullscreen()
      if ('keyboard' in navigator && 'lock' in navigator.keyboard) {
        navigator.keyboard.unlock()
      }
    } else {
      if ('keyboard' in navigator && 'lock' in navigator.keyboard) {
        navigator.keyboard.lock(['Escape'])
      }
      enterFullscreen()
    }
    setGameFullscreen(!gameFullscreen)
  }, [enterFullscreen, exitFullscreen, isFullscreen, gameFullscreen])

  const handlePlay = useCallback(() => {
    if (gameProject.paymentMode === PaymentMode.PAID) {
      if (holdUnlock) {
        buyNow({
          chainId: price.token.chainId,
          inputCurrency: '',
          outputCurrency: getAddress(price.token.address),
        })
      } else {
        setRunGameFlag(true)
      }
    } else {
      setRunGameFlag(true)
    }
  }, [gameProject, price, buyNow, holdUnlock])

  const processHoldUnlock = useCallback(() => {
    if (gameProject.paymentMode === PaymentMode.PAID) {
      if (isEmpty(priceToken) || !priceToken?.balanceOf) {
        return
      }

      const isUnlock = new BigNumber(
        utils.formatUnits(priceToken.balanceOf, price.token.decimals)
      ).gte(utils.formatUnits(price.amount, price.token.decimals))

      if (isUnlock) {
        setHoldUnlock(false)
      }
    } else {
      setHoldUnlock(false)
    }
  }, [gameProject, price, priceToken])

  useEffect(() => {
    processHoldUnlock()
  }, [processHoldUnlock])

  return (
    <div
      id="html_embed_widget_78140"
      className={`${styles.html_embed_widget} ${styles.embed_wrapper}`}
    >
      <Wrapper>
        {runGameFlag ? (
          <div
            className={`${styles.iframe_wrapper}${
              gameFullscreen ? ' ' + styles.open : ''
            }`}
            ref={ref}
          >
            <iframe
              style={{ width: '100%', height: '100%' }}
              frameBorder="0"
              src={gameProjectPlayer({
                gameName: gameProject.gameName,
                kind: gameProject.kind,
              })}
              scrolling="no"
              id="game_drop"
            ></iframe>
            <div className={styles.full_close} onClick={handleFullscreen}>
              {isFullscreen || gameFullscreen ? (
                <FullscreenExitIcon></FullscreenExitIcon>
              ) : (
                <FullscreenIcon></FullscreenIcon>
              )}
            </div>
          </div>
        ) : (
          <div className={styles.iframe_placeholder}>
            <button
              onClick={() => handlePlay()}
              className={`${stylesCommon.button} ${styles.button} ${styles.load_iframe_btn}`}
            >
              {holdUnlock ? (
                isEmpty(price) ? (
                  `Need to hold Token`
                ) : (
                  `Need to hold ${balanceDecimal(
                    utils.formatUnits(price.amount, price.token.decimals)
                  )} ${price.token.symbol}`
                )
              ) : (
                <>
                  <PlayCircleOutlineIcon
                    sx={{
                      mr: 1,
                      fontSize: '26px',
                    }}
                  />
                  Play
                </>
              )}
            </button>
          </div>
        )}
      </Wrapper>
    </div>
  )
}

export default EmbedWidget
