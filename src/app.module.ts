import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        CatModule,
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql'
        }),
        MongooseModule.forRoot('mongodb://localhost/nest')
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
