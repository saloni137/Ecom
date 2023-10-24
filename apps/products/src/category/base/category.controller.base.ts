/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CategoryService } from "../category.service";
import { CategoryCreateInput } from "./CategoryCreateInput";
import { CategoryWhereInput } from "./CategoryWhereInput";
import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { CategoryFindManyArgs } from "./CategoryFindManyArgs";
import { CategoryUpdateInput } from "./CategoryUpdateInput";
import { Category } from "./Category";

export class CategoryControllerBase {
  constructor(protected readonly service: CategoryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Category })
  async create(@common.Body() data: CategoryCreateInput): Promise<Category> {
    return await this.service.create({
      data: {
        ...data,

        products: data.products
          ? {
              connect: data.products,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        image: true,
        name: true,

        products: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Category] })
  @ApiNestedQuery(CategoryFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Category[]> {
    const args = plainToClass(CategoryFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        image: true,
        name: true,

        products: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Category })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: CategoryWhereUniqueInput
  ): Promise<Category | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        image: true,
        name: true,

        products: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Category })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() data: CategoryUpdateInput
  ): Promise<Category | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          products: data.products
            ? {
                connect: data.products,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          image: true,
          name: true,

          products: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Category })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: CategoryWhereUniqueInput
  ): Promise<Category | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          image: true,
          name: true,

          products: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
