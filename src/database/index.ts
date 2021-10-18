import 'reflect-metadata'
import { createConnection, Connection, EntityTarget, Repository } from 'typeorm'

class TypeORMConnection {
  private _connection: Connection

  isConnected(): boolean {
    return typeof this._connection !== 'undefined'
  }

  getRepository(repository: EntityTarget<any>): Repository<any> {
    return this._connection.getRepository(repository)
  }

  async createDatabaseConnection(
    databaseProfileName: string
  ): Promise<Connection> {
    const connections = {
      local: {
        type: "postgres",
        host: "ziggy.db.elephantsql.com",
        port: 5432,
        username: "gpazrbku",
        password: "5ldV40O2okfOyCYOG333z5NWGC-ywnlH",
        database: "gpazrbku",
        synchronize: false,
        logging: true,
        entities: ['./src/entity/*'],
        migrations: ['./dist/src/migration/*'],
      }
    }
    this._connection = await createConnection(connections[databaseProfileName])

    return this._connection
  }
}

export default new TypeORMConnection()