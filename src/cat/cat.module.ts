import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { CatResolver } from './cat.resolver';

@Module({
  controllers: [CatController],
  providers: [CatService, CatResolver]
})
export class CatModule {}
