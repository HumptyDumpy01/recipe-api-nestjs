import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';

@Module({
  imports: [HttpModule],
  controllers: [RecipeController],
  providers: [RecipeService],
})
export class RecipeModule {}
