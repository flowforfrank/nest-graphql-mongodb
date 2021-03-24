import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
    imports: [
        CatModule,
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql'
        })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
