import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class CatResolver {
    @Query(returns => String)
    async hello() {
        return '👋';
    }
}
