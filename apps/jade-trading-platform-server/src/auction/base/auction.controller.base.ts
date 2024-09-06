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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AuctionService } from "../auction.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AuctionCreateInput } from "./AuctionCreateInput";
import { Auction } from "./Auction";
import { AuctionFindManyArgs } from "./AuctionFindManyArgs";
import { AuctionWhereUniqueInput } from "./AuctionWhereUniqueInput";
import { AuctionUpdateInput } from "./AuctionUpdateInput";
import { BidFindManyArgs } from "../../bid/base/BidFindManyArgs";
import { Bid } from "../../bid/base/Bid";
import { BidWhereUniqueInput } from "../../bid/base/BidWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AuctionControllerBase {
  constructor(
    protected readonly service: AuctionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Auction })
  @nestAccessControl.UseRoles({
    resource: "Auction",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAuction(
    @common.Body() data: AuctionCreateInput
  ): Promise<Auction> {
    return await this.service.createAuction({
      data: {
        ...data,

        jade: data.jade
          ? {
              connect: data.jade,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        endingTime: true,
        highestBid: true,
        id: true,

        jade: {
          select: {
            id: true,
          },
        },

        startingPrice: true,
        startingTime: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Auction] })
  @ApiNestedQuery(AuctionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Auction",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async auctions(@common.Req() request: Request): Promise<Auction[]> {
    const args = plainToClass(AuctionFindManyArgs, request.query);
    return this.service.auctions({
      ...args,
      select: {
        createdAt: true,
        endingTime: true,
        highestBid: true,
        id: true,

        jade: {
          select: {
            id: true,
          },
        },

        startingPrice: true,
        startingTime: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Auction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Auction",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async auction(
    @common.Param() params: AuctionWhereUniqueInput
  ): Promise<Auction | null> {
    const result = await this.service.auction({
      where: params,
      select: {
        createdAt: true,
        endingTime: true,
        highestBid: true,
        id: true,

        jade: {
          select: {
            id: true,
          },
        },

        startingPrice: true,
        startingTime: true,
        status: true,
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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Auction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Auction",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAuction(
    @common.Param() params: AuctionWhereUniqueInput,
    @common.Body() data: AuctionUpdateInput
  ): Promise<Auction | null> {
    try {
      return await this.service.updateAuction({
        where: params,
        data: {
          ...data,

          jade: data.jade
            ? {
                connect: data.jade,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          endingTime: true,
          highestBid: true,
          id: true,

          jade: {
            select: {
              id: true,
            },
          },

          startingPrice: true,
          startingTime: true,
          status: true,
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
  @swagger.ApiOkResponse({ type: Auction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Auction",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAuction(
    @common.Param() params: AuctionWhereUniqueInput
  ): Promise<Auction | null> {
    try {
      return await this.service.deleteAuction({
        where: params,
        select: {
          createdAt: true,
          endingTime: true,
          highestBid: true,
          id: true,

          jade: {
            select: {
              id: true,
            },
          },

          startingPrice: true,
          startingTime: true,
          status: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/bids")
  @ApiNestedQuery(BidFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Bid",
    action: "read",
    possession: "any",
  })
  async findBids(
    @common.Req() request: Request,
    @common.Param() params: AuctionWhereUniqueInput
  ): Promise<Bid[]> {
    const query = plainToClass(BidFindManyArgs, request.query);
    const results = await this.service.findBids(params.id, {
      ...query,
      select: {
        amount: true,

        auction: {
          select: {
            id: true,
          },
        },

        bidTime: true,
        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/bids")
  @nestAccessControl.UseRoles({
    resource: "Auction",
    action: "update",
    possession: "any",
  })
  async connectBids(
    @common.Param() params: AuctionWhereUniqueInput,
    @common.Body() body: BidWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bids: {
        connect: body,
      },
    };
    await this.service.updateAuction({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/bids")
  @nestAccessControl.UseRoles({
    resource: "Auction",
    action: "update",
    possession: "any",
  })
  async updateBids(
    @common.Param() params: AuctionWhereUniqueInput,
    @common.Body() body: BidWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bids: {
        set: body,
      },
    };
    await this.service.updateAuction({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/bids")
  @nestAccessControl.UseRoles({
    resource: "Auction",
    action: "update",
    possession: "any",
  })
  async disconnectBids(
    @common.Param() params: AuctionWhereUniqueInput,
    @common.Body() body: BidWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bids: {
        disconnect: body,
      },
    };
    await this.service.updateAuction({
      where: params,
      data,
      select: { id: true },
    });
  }
}
