-- CreateTable
CREATE TABLE "article" (
    "id" SERIAL NOT NULL,
    "body" TEXT NOT NULL,
    "publish" BOOLEAN NOT NULL DEFAULT true,
    "create_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    "update_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "article_pkey" PRIMARY KEY ("id")
);
