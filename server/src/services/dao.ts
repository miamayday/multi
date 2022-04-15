import { Pool } from 'pg'
import type { ClientConfig, QueryResult } from 'pg'
import type Message from '../types/Message'

const config: ClientConfig = {
  user: 'postgres',
  database: 'chat',
  password: 'password',
  port: 5432,
  host: process.env.PGHOST
}

class DAO {
  private db: Pool

  constructor() {
    this.db = new Pool(config)

    this.execute(`
      CREATE TABLE IF NOT EXISTS logs (
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(50) NOT NULL,
        username VARCHAR(50) NOT NULL,
        message VARCHAR(255) NOT NULL,
        created_on TIMESTAMP NOT NULL
      );
    `)
  }

  private execute(query: string, values: any[] = []) {
    this.db.query(query, values, (err: Error, result: QueryResult) => {
      if (err) {
        console.error(err.stack)
      } else {
        console.log(`${result.command}\n  Rows: ${result.rowCount}`)
      }
    })
  }

  createLog(message: Message) {
    const query =
      'INSERT INTO logs (user_id, username, message, created_on) VALUES ($1, $2, $3, $4);'

    const values = [
      message.user.id,
      message.user.name,
      message.content,
      new Date()
    ]

    this.execute(query, values)
  }
}

export default DAO
