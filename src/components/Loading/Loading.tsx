import type { FC } from 'react'

import * as styles from './Loading.styles'

const Loading: FC = () => {
    return (
        <div css={styles.loaderWrapper}>
            <div css={styles.loader} />
            <p css={styles.loaderText}>loading...</p>
        </div>
    )
}

export default Loading
