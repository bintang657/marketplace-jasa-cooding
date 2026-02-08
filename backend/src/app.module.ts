import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [], // Nanti kita masukkan TypeOrmModule disini kalau Database sudah ready di Cloud
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
