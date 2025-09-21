import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  Get,
  Res,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { Response } from 'express';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { zip } from 'compressing';
import { join } from 'path';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('album')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return true;
  }

  @Get('export')
  export(@Res() res: Response) {
    const filePath = join(__dirname, '../images/1758461467117 + .png');
    res.download(filePath);
  }

  // 文件流下载
  @Get('stream')
  async stream(@Res() res: Response) {
    const filePath = join(__dirname, '../images/1758461467117 + .png');
    const targetStream = new zip.Stream();
    await targetStream.addEntry(filePath);
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', 'attachment; filename=kb');
    targetStream.pipe(res);
  }
}
