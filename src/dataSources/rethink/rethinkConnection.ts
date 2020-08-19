import { r, RBaseConnectionOptions, Connection } from "rethinkdb-ts";

export default class RethinkConnection {

    private CONNECTION_OPTS: RBaseConnectionOptions  = {
        host: 'localhost',
        port: 32772
    }

    connection(): Promise<Connection> {
        return r.connect(this.CONNECTION_OPTS);
    }

    close(connection: Connection): void {
        connection.close();
    }
}