import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserProfile from '../components/UserProfile'
import GameStats from '../components/GameStats'
import styles from '../styles/Profile.module.css'

export default function Finish(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Golf Score - Game Finished</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.userContainer}>
        <UserProfile
          path="/"
          profile={{
            name: 'Mike Michigan',
            username: 'mmichigan@gmail.com',
          }}
        />
      </div>
      <Container>
        <Row>
          <Col md={12} className="mt-4">
            <GameStats />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
