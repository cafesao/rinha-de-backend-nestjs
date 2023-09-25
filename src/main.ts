import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { PrismaClient } from "@prisma/client"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle("People API")
    .setDescription("The people API description")
    .setVersion("1.0")
    .addTag("people")
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("api", app, document)

  const prisma = new PrismaClient()
  await prisma.$connect()

  await app.listen(3000)
}
bootstrap()
