
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Travel
 * 
 */
export type Travel = $Result.DefaultSelection<Prisma.$TravelPayload>
/**
 * Model UserTravel
 * 
 */
export type UserTravel = $Result.DefaultSelection<Prisma.$UserTravelPayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model ExpenseParticipant
 * 
 */
export type ExpenseParticipant = $Result.DefaultSelection<Prisma.$ExpenseParticipantPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.travel`: Exposes CRUD operations for the **Travel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Travels
    * const travels = await prisma.travel.findMany()
    * ```
    */
  get travel(): Prisma.TravelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userTravel`: Exposes CRUD operations for the **UserTravel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTravels
    * const userTravels = await prisma.userTravel.findMany()
    * ```
    */
  get userTravel(): Prisma.UserTravelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expenseParticipant`: Exposes CRUD operations for the **ExpenseParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpenseParticipants
    * const expenseParticipants = await prisma.expenseParticipant.findMany()
    * ```
    */
  get expenseParticipant(): Prisma.ExpenseParticipantDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Travel: 'Travel',
    UserTravel: 'UserTravel',
    Expense: 'Expense',
    ExpenseParticipant: 'ExpenseParticipant'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "travel" | "userTravel" | "expense" | "expenseParticipant"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Travel: {
        payload: Prisma.$TravelPayload<ExtArgs>
        fields: Prisma.TravelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TravelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TravelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          findFirst: {
            args: Prisma.TravelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TravelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          findMany: {
            args: Prisma.TravelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>[]
          }
          create: {
            args: Prisma.TravelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          createMany: {
            args: Prisma.TravelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TravelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>[]
          }
          delete: {
            args: Prisma.TravelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          update: {
            args: Prisma.TravelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          deleteMany: {
            args: Prisma.TravelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TravelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TravelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>[]
          }
          upsert: {
            args: Prisma.TravelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          aggregate: {
            args: Prisma.TravelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTravel>
          }
          groupBy: {
            args: Prisma.TravelGroupByArgs<ExtArgs>
            result: $Utils.Optional<TravelGroupByOutputType>[]
          }
          count: {
            args: Prisma.TravelCountArgs<ExtArgs>
            result: $Utils.Optional<TravelCountAggregateOutputType> | number
          }
        }
      }
      UserTravel: {
        payload: Prisma.$UserTravelPayload<ExtArgs>
        fields: Prisma.UserTravelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTravelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTravelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTravelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTravelPayload>
          }
          findFirst: {
            args: Prisma.UserTravelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTravelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTravelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTravelPayload>
          }
          findMany: {
            args: Prisma.UserTravelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTravelPayload>[]
          }
          create: {
            args: Prisma.UserTravelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTravelPayload>
          }
          createMany: {
            args: Prisma.UserTravelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserTravelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTravelPayload>[]
          }
          delete: {
            args: Prisma.UserTravelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTravelPayload>
          }
          update: {
            args: Prisma.UserTravelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTravelPayload>
          }
          deleteMany: {
            args: Prisma.UserTravelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTravelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserTravelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTravelPayload>[]
          }
          upsert: {
            args: Prisma.UserTravelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTravelPayload>
          }
          aggregate: {
            args: Prisma.UserTravelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTravel>
          }
          groupBy: {
            args: Prisma.UserTravelGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTravelGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTravelCountArgs<ExtArgs>
            result: $Utils.Optional<UserTravelCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      ExpenseParticipant: {
        payload: Prisma.$ExpenseParticipantPayload<ExtArgs>
        fields: Prisma.ExpenseParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>
          }
          findFirst: {
            args: Prisma.ExpenseParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>
          }
          findMany: {
            args: Prisma.ExpenseParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>[]
          }
          create: {
            args: Prisma.ExpenseParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>
          }
          createMany: {
            args: Prisma.ExpenseParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>[]
          }
          delete: {
            args: Prisma.ExpenseParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>
          }
          update: {
            args: Prisma.ExpenseParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>
          }
          deleteMany: {
            args: Prisma.ExpenseParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>[]
          }
          upsert: {
            args: Prisma.ExpenseParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseParticipantPayload>
          }
          aggregate: {
            args: Prisma.ExpenseParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenseParticipant>
          }
          groupBy: {
            args: Prisma.ExpenseParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseParticipantCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    travel?: TravelOmit
    userTravel?: UserTravelOmit
    expense?: ExpenseOmit
    expenseParticipant?: ExpenseParticipantOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userTravels: number
    paidExpenses: number
    expenseParticipations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTravels?: boolean | UserCountOutputTypeCountUserTravelsArgs
    paidExpenses?: boolean | UserCountOutputTypeCountPaidExpensesArgs
    expenseParticipations?: boolean | UserCountOutputTypeCountExpenseParticipationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserTravelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTravelWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaidExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExpenseParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseParticipantWhereInput
  }


  /**
   * Count Type TravelCountOutputType
   */

  export type TravelCountOutputType = {
    userTravels: number
    expenses: number
  }

  export type TravelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTravels?: boolean | TravelCountOutputTypeCountUserTravelsArgs
    expenses?: boolean | TravelCountOutputTypeCountExpensesArgs
  }

  // Custom InputTypes
  /**
   * TravelCountOutputType without action
   */
  export type TravelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelCountOutputType
     */
    select?: TravelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TravelCountOutputType without action
   */
  export type TravelCountOutputTypeCountUserTravelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTravelWhereInput
  }

  /**
   * TravelCountOutputType without action
   */
  export type TravelCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }


  /**
   * Count Type ExpenseCountOutputType
   */

  export type ExpenseCountOutputType = {
    participants: number
  }

  export type ExpenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | ExpenseCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseCountOutputType
     */
    select?: ExpenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseParticipantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    firebaseUid: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    firebaseUid: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    firebaseUid: number
    firstName: number
    lastName: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    firebaseUid?: true
    firstName?: true
    lastName?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    firebaseUid?: true
    firstName?: true
    lastName?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    firebaseUid?: true
    firstName?: true
    lastName?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    firebaseUid: string
    firstName: string
    lastName: string
    phone: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firebaseUid?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userTravels?: boolean | User$userTravelsArgs<ExtArgs>
    paidExpenses?: boolean | User$paidExpensesArgs<ExtArgs>
    expenseParticipations?: boolean | User$expenseParticipationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firebaseUid?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firebaseUid?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    firebaseUid?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "firebaseUid" | "firstName" | "lastName" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTravels?: boolean | User$userTravelsArgs<ExtArgs>
    paidExpenses?: boolean | User$paidExpensesArgs<ExtArgs>
    expenseParticipations?: boolean | User$expenseParticipationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userTravels: Prisma.$UserTravelPayload<ExtArgs>[]
      paidExpenses: Prisma.$ExpensePayload<ExtArgs>[]
      expenseParticipations: Prisma.$ExpenseParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      firebaseUid: string
      firstName: string
      lastName: string
      phone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userTravels<T extends User$userTravelsArgs<ExtArgs> = {}>(args?: Subset<T, User$userTravelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTravelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paidExpenses<T extends User$paidExpensesArgs<ExtArgs> = {}>(args?: Subset<T, User$paidExpensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenseParticipations<T extends User$expenseParticipationsArgs<ExtArgs> = {}>(args?: Subset<T, User$expenseParticipationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly firebaseUid: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userTravels
   */
  export type User$userTravelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTravel
     */
    select?: UserTravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTravel
     */
    omit?: UserTravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTravelInclude<ExtArgs> | null
    where?: UserTravelWhereInput
    orderBy?: UserTravelOrderByWithRelationInput | UserTravelOrderByWithRelationInput[]
    cursor?: UserTravelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTravelScalarFieldEnum | UserTravelScalarFieldEnum[]
  }

  /**
   * User.paidExpenses
   */
  export type User$paidExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * User.expenseParticipations
   */
  export type User$expenseParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    where?: ExpenseParticipantWhereInput
    orderBy?: ExpenseParticipantOrderByWithRelationInput | ExpenseParticipantOrderByWithRelationInput[]
    cursor?: ExpenseParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseParticipantScalarFieldEnum | ExpenseParticipantScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Travel
   */

  export type AggregateTravel = {
    _count: TravelCountAggregateOutputType | null
    _min: TravelMinAggregateOutputType | null
    _max: TravelMaxAggregateOutputType | null
  }

  export type TravelMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TravelMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TravelCountAggregateOutputType = {
    id: number
    title: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TravelMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TravelMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TravelCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TravelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Travel to aggregate.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Travels
    **/
    _count?: true | TravelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TravelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TravelMaxAggregateInputType
  }

  export type GetTravelAggregateType<T extends TravelAggregateArgs> = {
        [P in keyof T & keyof AggregateTravel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravel[P]>
      : GetScalarType<T[P], AggregateTravel[P]>
  }




  export type TravelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelWhereInput
    orderBy?: TravelOrderByWithAggregationInput | TravelOrderByWithAggregationInput[]
    by: TravelScalarFieldEnum[] | TravelScalarFieldEnum
    having?: TravelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TravelCountAggregateInputType | true
    _min?: TravelMinAggregateInputType
    _max?: TravelMaxAggregateInputType
  }

  export type TravelGroupByOutputType = {
    id: string
    title: string
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TravelCountAggregateOutputType | null
    _min: TravelMinAggregateOutputType | null
    _max: TravelMaxAggregateOutputType | null
  }

  type GetTravelGroupByPayload<T extends TravelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TravelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TravelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TravelGroupByOutputType[P]>
            : GetScalarType<T[P], TravelGroupByOutputType[P]>
        }
      >
    >


  export type TravelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userTravels?: boolean | Travel$userTravelsArgs<ExtArgs>
    expenses?: boolean | Travel$expensesArgs<ExtArgs>
    _count?: boolean | TravelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travel"]>

  export type TravelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["travel"]>

  export type TravelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["travel"]>

  export type TravelSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TravelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["travel"]>
  export type TravelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTravels?: boolean | Travel$userTravelsArgs<ExtArgs>
    expenses?: boolean | Travel$expensesArgs<ExtArgs>
    _count?: boolean | TravelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TravelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TravelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TravelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Travel"
    objects: {
      userTravels: Prisma.$UserTravelPayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["travel"]>
    composites: {}
  }

  type TravelGetPayload<S extends boolean | null | undefined | TravelDefaultArgs> = $Result.GetResult<Prisma.$TravelPayload, S>

  type TravelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TravelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TravelCountAggregateInputType | true
    }

  export interface TravelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Travel'], meta: { name: 'Travel' } }
    /**
     * Find zero or one Travel that matches the filter.
     * @param {TravelFindUniqueArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TravelFindUniqueArgs>(args: SelectSubset<T, TravelFindUniqueArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Travel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TravelFindUniqueOrThrowArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TravelFindUniqueOrThrowArgs>(args: SelectSubset<T, TravelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Travel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelFindFirstArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TravelFindFirstArgs>(args?: SelectSubset<T, TravelFindFirstArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Travel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelFindFirstOrThrowArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TravelFindFirstOrThrowArgs>(args?: SelectSubset<T, TravelFindFirstOrThrowArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Travels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Travels
     * const travels = await prisma.travel.findMany()
     * 
     * // Get first 10 Travels
     * const travels = await prisma.travel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const travelWithIdOnly = await prisma.travel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TravelFindManyArgs>(args?: SelectSubset<T, TravelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Travel.
     * @param {TravelCreateArgs} args - Arguments to create a Travel.
     * @example
     * // Create one Travel
     * const Travel = await prisma.travel.create({
     *   data: {
     *     // ... data to create a Travel
     *   }
     * })
     * 
     */
    create<T extends TravelCreateArgs>(args: SelectSubset<T, TravelCreateArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Travels.
     * @param {TravelCreateManyArgs} args - Arguments to create many Travels.
     * @example
     * // Create many Travels
     * const travel = await prisma.travel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TravelCreateManyArgs>(args?: SelectSubset<T, TravelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Travels and returns the data saved in the database.
     * @param {TravelCreateManyAndReturnArgs} args - Arguments to create many Travels.
     * @example
     * // Create many Travels
     * const travel = await prisma.travel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Travels and only return the `id`
     * const travelWithIdOnly = await prisma.travel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TravelCreateManyAndReturnArgs>(args?: SelectSubset<T, TravelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Travel.
     * @param {TravelDeleteArgs} args - Arguments to delete one Travel.
     * @example
     * // Delete one Travel
     * const Travel = await prisma.travel.delete({
     *   where: {
     *     // ... filter to delete one Travel
     *   }
     * })
     * 
     */
    delete<T extends TravelDeleteArgs>(args: SelectSubset<T, TravelDeleteArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Travel.
     * @param {TravelUpdateArgs} args - Arguments to update one Travel.
     * @example
     * // Update one Travel
     * const travel = await prisma.travel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TravelUpdateArgs>(args: SelectSubset<T, TravelUpdateArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Travels.
     * @param {TravelDeleteManyArgs} args - Arguments to filter Travels to delete.
     * @example
     * // Delete a few Travels
     * const { count } = await prisma.travel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TravelDeleteManyArgs>(args?: SelectSubset<T, TravelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Travels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Travels
     * const travel = await prisma.travel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TravelUpdateManyArgs>(args: SelectSubset<T, TravelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Travels and returns the data updated in the database.
     * @param {TravelUpdateManyAndReturnArgs} args - Arguments to update many Travels.
     * @example
     * // Update many Travels
     * const travel = await prisma.travel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Travels and only return the `id`
     * const travelWithIdOnly = await prisma.travel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TravelUpdateManyAndReturnArgs>(args: SelectSubset<T, TravelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Travel.
     * @param {TravelUpsertArgs} args - Arguments to update or create a Travel.
     * @example
     * // Update or create a Travel
     * const travel = await prisma.travel.upsert({
     *   create: {
     *     // ... data to create a Travel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Travel we want to update
     *   }
     * })
     */
    upsert<T extends TravelUpsertArgs>(args: SelectSubset<T, TravelUpsertArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Travels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelCountArgs} args - Arguments to filter Travels to count.
     * @example
     * // Count the number of Travels
     * const count = await prisma.travel.count({
     *   where: {
     *     // ... the filter for the Travels we want to count
     *   }
     * })
    **/
    count<T extends TravelCountArgs>(
      args?: Subset<T, TravelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TravelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Travel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TravelAggregateArgs>(args: Subset<T, TravelAggregateArgs>): Prisma.PrismaPromise<GetTravelAggregateType<T>>

    /**
     * Group by Travel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TravelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TravelGroupByArgs['orderBy'] }
        : { orderBy?: TravelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TravelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Travel model
   */
  readonly fields: TravelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Travel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TravelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userTravels<T extends Travel$userTravelsArgs<ExtArgs> = {}>(args?: Subset<T, Travel$userTravelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTravelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends Travel$expensesArgs<ExtArgs> = {}>(args?: Subset<T, Travel$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Travel model
   */
  interface TravelFieldRefs {
    readonly id: FieldRef<"Travel", 'String'>
    readonly title: FieldRef<"Travel", 'String'>
    readonly description: FieldRef<"Travel", 'String'>
    readonly isActive: FieldRef<"Travel", 'Boolean'>
    readonly createdAt: FieldRef<"Travel", 'DateTime'>
    readonly updatedAt: FieldRef<"Travel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Travel findUnique
   */
  export type TravelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where: TravelWhereUniqueInput
  }

  /**
   * Travel findUniqueOrThrow
   */
  export type TravelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where: TravelWhereUniqueInput
  }

  /**
   * Travel findFirst
   */
  export type TravelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Travels.
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Travels.
     */
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }

  /**
   * Travel findFirstOrThrow
   */
  export type TravelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Travels.
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Travels.
     */
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }

  /**
   * Travel findMany
   */
  export type TravelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travels to fetch.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Travels.
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }

  /**
   * Travel create
   */
  export type TravelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * The data needed to create a Travel.
     */
    data: XOR<TravelCreateInput, TravelUncheckedCreateInput>
  }

  /**
   * Travel createMany
   */
  export type TravelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Travels.
     */
    data: TravelCreateManyInput | TravelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Travel createManyAndReturn
   */
  export type TravelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * The data used to create many Travels.
     */
    data: TravelCreateManyInput | TravelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Travel update
   */
  export type TravelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * The data needed to update a Travel.
     */
    data: XOR<TravelUpdateInput, TravelUncheckedUpdateInput>
    /**
     * Choose, which Travel to update.
     */
    where: TravelWhereUniqueInput
  }

  /**
   * Travel updateMany
   */
  export type TravelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Travels.
     */
    data: XOR<TravelUpdateManyMutationInput, TravelUncheckedUpdateManyInput>
    /**
     * Filter which Travels to update
     */
    where?: TravelWhereInput
    /**
     * Limit how many Travels to update.
     */
    limit?: number
  }

  /**
   * Travel updateManyAndReturn
   */
  export type TravelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * The data used to update Travels.
     */
    data: XOR<TravelUpdateManyMutationInput, TravelUncheckedUpdateManyInput>
    /**
     * Filter which Travels to update
     */
    where?: TravelWhereInput
    /**
     * Limit how many Travels to update.
     */
    limit?: number
  }

  /**
   * Travel upsert
   */
  export type TravelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * The filter to search for the Travel to update in case it exists.
     */
    where: TravelWhereUniqueInput
    /**
     * In case the Travel found by the `where` argument doesn't exist, create a new Travel with this data.
     */
    create: XOR<TravelCreateInput, TravelUncheckedCreateInput>
    /**
     * In case the Travel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TravelUpdateInput, TravelUncheckedUpdateInput>
  }

  /**
   * Travel delete
   */
  export type TravelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter which Travel to delete.
     */
    where: TravelWhereUniqueInput
  }

  /**
   * Travel deleteMany
   */
  export type TravelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Travels to delete
     */
    where?: TravelWhereInput
    /**
     * Limit how many Travels to delete.
     */
    limit?: number
  }

  /**
   * Travel.userTravels
   */
  export type Travel$userTravelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTravel
     */
    select?: UserTravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTravel
     */
    omit?: UserTravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTravelInclude<ExtArgs> | null
    where?: UserTravelWhereInput
    orderBy?: UserTravelOrderByWithRelationInput | UserTravelOrderByWithRelationInput[]
    cursor?: UserTravelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTravelScalarFieldEnum | UserTravelScalarFieldEnum[]
  }

  /**
   * Travel.expenses
   */
  export type Travel$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Travel without action
   */
  export type TravelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
  }


  /**
   * Model UserTravel
   */

  export type AggregateUserTravel = {
    _count: UserTravelCountAggregateOutputType | null
    _avg: UserTravelAvgAggregateOutputType | null
    _sum: UserTravelSumAggregateOutputType | null
    _min: UserTravelMinAggregateOutputType | null
    _max: UserTravelMaxAggregateOutputType | null
  }

  export type UserTravelAvgAggregateOutputType = {
    exitBalance: Decimal | null
  }

  export type UserTravelSumAggregateOutputType = {
    exitBalance: Decimal | null
  }

  export type UserTravelMinAggregateOutputType = {
    id: string | null
    userId: string | null
    travelId: string | null
    role: string | null
    joinedAt: Date | null
    leftAt: Date | null
    exitBalance: Decimal | null
  }

  export type UserTravelMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    travelId: string | null
    role: string | null
    joinedAt: Date | null
    leftAt: Date | null
    exitBalance: Decimal | null
  }

  export type UserTravelCountAggregateOutputType = {
    id: number
    userId: number
    travelId: number
    role: number
    joinedAt: number
    leftAt: number
    exitBalance: number
    _all: number
  }


  export type UserTravelAvgAggregateInputType = {
    exitBalance?: true
  }

  export type UserTravelSumAggregateInputType = {
    exitBalance?: true
  }

  export type UserTravelMinAggregateInputType = {
    id?: true
    userId?: true
    travelId?: true
    role?: true
    joinedAt?: true
    leftAt?: true
    exitBalance?: true
  }

  export type UserTravelMaxAggregateInputType = {
    id?: true
    userId?: true
    travelId?: true
    role?: true
    joinedAt?: true
    leftAt?: true
    exitBalance?: true
  }

  export type UserTravelCountAggregateInputType = {
    id?: true
    userId?: true
    travelId?: true
    role?: true
    joinedAt?: true
    leftAt?: true
    exitBalance?: true
    _all?: true
  }

  export type UserTravelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTravel to aggregate.
     */
    where?: UserTravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTravels to fetch.
     */
    orderBy?: UserTravelOrderByWithRelationInput | UserTravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTravels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTravels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTravels
    **/
    _count?: true | UserTravelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserTravelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserTravelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTravelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTravelMaxAggregateInputType
  }

  export type GetUserTravelAggregateType<T extends UserTravelAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTravel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTravel[P]>
      : GetScalarType<T[P], AggregateUserTravel[P]>
  }




  export type UserTravelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTravelWhereInput
    orderBy?: UserTravelOrderByWithAggregationInput | UserTravelOrderByWithAggregationInput[]
    by: UserTravelScalarFieldEnum[] | UserTravelScalarFieldEnum
    having?: UserTravelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTravelCountAggregateInputType | true
    _avg?: UserTravelAvgAggregateInputType
    _sum?: UserTravelSumAggregateInputType
    _min?: UserTravelMinAggregateInputType
    _max?: UserTravelMaxAggregateInputType
  }

  export type UserTravelGroupByOutputType = {
    id: string
    userId: string
    travelId: string
    role: string
    joinedAt: Date
    leftAt: Date | null
    exitBalance: Decimal | null
    _count: UserTravelCountAggregateOutputType | null
    _avg: UserTravelAvgAggregateOutputType | null
    _sum: UserTravelSumAggregateOutputType | null
    _min: UserTravelMinAggregateOutputType | null
    _max: UserTravelMaxAggregateOutputType | null
  }

  type GetUserTravelGroupByPayload<T extends UserTravelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTravelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTravelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTravelGroupByOutputType[P]>
            : GetScalarType<T[P], UserTravelGroupByOutputType[P]>
        }
      >
    >


  export type UserTravelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    travelId?: boolean
    role?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    exitBalance?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    travel?: boolean | TravelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTravel"]>

  export type UserTravelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    travelId?: boolean
    role?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    exitBalance?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    travel?: boolean | TravelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTravel"]>

  export type UserTravelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    travelId?: boolean
    role?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    exitBalance?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    travel?: boolean | TravelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTravel"]>

  export type UserTravelSelectScalar = {
    id?: boolean
    userId?: boolean
    travelId?: boolean
    role?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    exitBalance?: boolean
  }

  export type UserTravelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "travelId" | "role" | "joinedAt" | "leftAt" | "exitBalance", ExtArgs["result"]["userTravel"]>
  export type UserTravelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    travel?: boolean | TravelDefaultArgs<ExtArgs>
  }
  export type UserTravelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    travel?: boolean | TravelDefaultArgs<ExtArgs>
  }
  export type UserTravelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    travel?: boolean | TravelDefaultArgs<ExtArgs>
  }

  export type $UserTravelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTravel"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      travel: Prisma.$TravelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      travelId: string
      role: string
      joinedAt: Date
      leftAt: Date | null
      exitBalance: Prisma.Decimal | null
    }, ExtArgs["result"]["userTravel"]>
    composites: {}
  }

  type UserTravelGetPayload<S extends boolean | null | undefined | UserTravelDefaultArgs> = $Result.GetResult<Prisma.$UserTravelPayload, S>

  type UserTravelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserTravelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTravelCountAggregateInputType | true
    }

  export interface UserTravelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserTravel'], meta: { name: 'UserTravel' } }
    /**
     * Find zero or one UserTravel that matches the filter.
     * @param {UserTravelFindUniqueArgs} args - Arguments to find a UserTravel
     * @example
     * // Get one UserTravel
     * const userTravel = await prisma.userTravel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTravelFindUniqueArgs>(args: SelectSubset<T, UserTravelFindUniqueArgs<ExtArgs>>): Prisma__UserTravelClient<$Result.GetResult<Prisma.$UserTravelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserTravel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserTravelFindUniqueOrThrowArgs} args - Arguments to find a UserTravel
     * @example
     * // Get one UserTravel
     * const userTravel = await prisma.userTravel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTravelFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTravelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTravelClient<$Result.GetResult<Prisma.$UserTravelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTravel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTravelFindFirstArgs} args - Arguments to find a UserTravel
     * @example
     * // Get one UserTravel
     * const userTravel = await prisma.userTravel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTravelFindFirstArgs>(args?: SelectSubset<T, UserTravelFindFirstArgs<ExtArgs>>): Prisma__UserTravelClient<$Result.GetResult<Prisma.$UserTravelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTravel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTravelFindFirstOrThrowArgs} args - Arguments to find a UserTravel
     * @example
     * // Get one UserTravel
     * const userTravel = await prisma.userTravel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTravelFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTravelFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTravelClient<$Result.GetResult<Prisma.$UserTravelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTravels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTravelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTravels
     * const userTravels = await prisma.userTravel.findMany()
     * 
     * // Get first 10 UserTravels
     * const userTravels = await prisma.userTravel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTravelWithIdOnly = await prisma.userTravel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserTravelFindManyArgs>(args?: SelectSubset<T, UserTravelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTravelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserTravel.
     * @param {UserTravelCreateArgs} args - Arguments to create a UserTravel.
     * @example
     * // Create one UserTravel
     * const UserTravel = await prisma.userTravel.create({
     *   data: {
     *     // ... data to create a UserTravel
     *   }
     * })
     * 
     */
    create<T extends UserTravelCreateArgs>(args: SelectSubset<T, UserTravelCreateArgs<ExtArgs>>): Prisma__UserTravelClient<$Result.GetResult<Prisma.$UserTravelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTravels.
     * @param {UserTravelCreateManyArgs} args - Arguments to create many UserTravels.
     * @example
     * // Create many UserTravels
     * const userTravel = await prisma.userTravel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTravelCreateManyArgs>(args?: SelectSubset<T, UserTravelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTravels and returns the data saved in the database.
     * @param {UserTravelCreateManyAndReturnArgs} args - Arguments to create many UserTravels.
     * @example
     * // Create many UserTravels
     * const userTravel = await prisma.userTravel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTravels and only return the `id`
     * const userTravelWithIdOnly = await prisma.userTravel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserTravelCreateManyAndReturnArgs>(args?: SelectSubset<T, UserTravelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTravelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserTravel.
     * @param {UserTravelDeleteArgs} args - Arguments to delete one UserTravel.
     * @example
     * // Delete one UserTravel
     * const UserTravel = await prisma.userTravel.delete({
     *   where: {
     *     // ... filter to delete one UserTravel
     *   }
     * })
     * 
     */
    delete<T extends UserTravelDeleteArgs>(args: SelectSubset<T, UserTravelDeleteArgs<ExtArgs>>): Prisma__UserTravelClient<$Result.GetResult<Prisma.$UserTravelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserTravel.
     * @param {UserTravelUpdateArgs} args - Arguments to update one UserTravel.
     * @example
     * // Update one UserTravel
     * const userTravel = await prisma.userTravel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTravelUpdateArgs>(args: SelectSubset<T, UserTravelUpdateArgs<ExtArgs>>): Prisma__UserTravelClient<$Result.GetResult<Prisma.$UserTravelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTravels.
     * @param {UserTravelDeleteManyArgs} args - Arguments to filter UserTravels to delete.
     * @example
     * // Delete a few UserTravels
     * const { count } = await prisma.userTravel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTravelDeleteManyArgs>(args?: SelectSubset<T, UserTravelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTravels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTravelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTravels
     * const userTravel = await prisma.userTravel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTravelUpdateManyArgs>(args: SelectSubset<T, UserTravelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTravels and returns the data updated in the database.
     * @param {UserTravelUpdateManyAndReturnArgs} args - Arguments to update many UserTravels.
     * @example
     * // Update many UserTravels
     * const userTravel = await prisma.userTravel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserTravels and only return the `id`
     * const userTravelWithIdOnly = await prisma.userTravel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserTravelUpdateManyAndReturnArgs>(args: SelectSubset<T, UserTravelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTravelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserTravel.
     * @param {UserTravelUpsertArgs} args - Arguments to update or create a UserTravel.
     * @example
     * // Update or create a UserTravel
     * const userTravel = await prisma.userTravel.upsert({
     *   create: {
     *     // ... data to create a UserTravel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTravel we want to update
     *   }
     * })
     */
    upsert<T extends UserTravelUpsertArgs>(args: SelectSubset<T, UserTravelUpsertArgs<ExtArgs>>): Prisma__UserTravelClient<$Result.GetResult<Prisma.$UserTravelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTravels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTravelCountArgs} args - Arguments to filter UserTravels to count.
     * @example
     * // Count the number of UserTravels
     * const count = await prisma.userTravel.count({
     *   where: {
     *     // ... the filter for the UserTravels we want to count
     *   }
     * })
    **/
    count<T extends UserTravelCountArgs>(
      args?: Subset<T, UserTravelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTravelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTravel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTravelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserTravelAggregateArgs>(args: Subset<T, UserTravelAggregateArgs>): Prisma.PrismaPromise<GetUserTravelAggregateType<T>>

    /**
     * Group by UserTravel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTravelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserTravelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTravelGroupByArgs['orderBy'] }
        : { orderBy?: UserTravelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserTravelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTravelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserTravel model
   */
  readonly fields: UserTravelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTravel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTravelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    travel<T extends TravelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TravelDefaultArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserTravel model
   */
  interface UserTravelFieldRefs {
    readonly id: FieldRef<"UserTravel", 'String'>
    readonly userId: FieldRef<"UserTravel", 'String'>
    readonly travelId: FieldRef<"UserTravel", 'String'>
    readonly role: FieldRef<"UserTravel", 'String'>
    readonly joinedAt: FieldRef<"UserTravel", 'DateTime'>
    readonly leftAt: FieldRef<"UserTravel", 'DateTime'>
    readonly exitBalance: FieldRef<"UserTravel", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * UserTravel findUnique
   */
  export type UserTravelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTravel
     */
    select?: UserTravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTravel
     */
    omit?: UserTravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTravelInclude<ExtArgs> | null
    /**
     * Filter, which UserTravel to fetch.
     */
    where: UserTravelWhereUniqueInput
  }

  /**
   * UserTravel findUniqueOrThrow
   */
  export type UserTravelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTravel
     */
    select?: UserTravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTravel
     */
    omit?: UserTravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTravelInclude<ExtArgs> | null
    /**
     * Filter, which UserTravel to fetch.
     */
    where: UserTravelWhereUniqueInput
  }

  /**
   * UserTravel findFirst
   */
  export type UserTravelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTravel
     */
    select?: UserTravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTravel
     */
    omit?: UserTravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTravelInclude<ExtArgs> | null
    /**
     * Filter, which UserTravel to fetch.
     */
    where?: UserTravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTravels to fetch.
     */
    orderBy?: UserTravelOrderByWithRelationInput | UserTravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTravels.
     */
    cursor?: UserTravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTravels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTravels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTravels.
     */
    distinct?: UserTravelScalarFieldEnum | UserTravelScalarFieldEnum[]
  }

  /**
   * UserTravel findFirstOrThrow
   */
  export type UserTravelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTravel
     */
    select?: UserTravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTravel
     */
    omit?: UserTravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTravelInclude<ExtArgs> | null
    /**
     * Filter, which UserTravel to fetch.
     */
    where?: UserTravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTravels to fetch.
     */
    orderBy?: UserTravelOrderByWithRelationInput | UserTravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTravels.
     */
    cursor?: UserTravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTravels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTravels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTravels.
     */
    distinct?: UserTravelScalarFieldEnum | UserTravelScalarFieldEnum[]
  }

  /**
   * UserTravel findMany
   */
  export type UserTravelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTravel
     */
    select?: UserTravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTravel
     */
    omit?: UserTravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTravelInclude<ExtArgs> | null
    /**
     * Filter, which UserTravels to fetch.
     */
    where?: UserTravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTravels to fetch.
     */
    orderBy?: UserTravelOrderByWithRelationInput | UserTravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTravels.
     */
    cursor?: UserTravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTravels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTravels.
     */
    skip?: number
    distinct?: UserTravelScalarFieldEnum | UserTravelScalarFieldEnum[]
  }

  /**
   * UserTravel create
   */
  export type UserTravelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTravel
     */
    select?: UserTravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTravel
     */
    omit?: UserTravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTravelInclude<ExtArgs> | null
    /**
     * The data needed to create a UserTravel.
     */
    data: XOR<UserTravelCreateInput, UserTravelUncheckedCreateInput>
  }

  /**
   * UserTravel createMany
   */
  export type UserTravelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTravels.
     */
    data: UserTravelCreateManyInput | UserTravelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserTravel createManyAndReturn
   */
  export type UserTravelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTravel
     */
    select?: UserTravelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTravel
     */
    omit?: UserTravelOmit<ExtArgs> | null
    /**
     * The data used to create many UserTravels.
     */
    data: UserTravelCreateManyInput | UserTravelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTravelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTravel update
   */
  export type UserTravelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTravel
     */
    select?: UserTravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTravel
     */
    omit?: UserTravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTravelInclude<ExtArgs> | null
    /**
     * The data needed to update a UserTravel.
     */
    data: XOR<UserTravelUpdateInput, UserTravelUncheckedUpdateInput>
    /**
     * Choose, which UserTravel to update.
     */
    where: UserTravelWhereUniqueInput
  }

  /**
   * UserTravel updateMany
   */
  export type UserTravelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTravels.
     */
    data: XOR<UserTravelUpdateManyMutationInput, UserTravelUncheckedUpdateManyInput>
    /**
     * Filter which UserTravels to update
     */
    where?: UserTravelWhereInput
    /**
     * Limit how many UserTravels to update.
     */
    limit?: number
  }

  /**
   * UserTravel updateManyAndReturn
   */
  export type UserTravelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTravel
     */
    select?: UserTravelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTravel
     */
    omit?: UserTravelOmit<ExtArgs> | null
    /**
     * The data used to update UserTravels.
     */
    data: XOR<UserTravelUpdateManyMutationInput, UserTravelUncheckedUpdateManyInput>
    /**
     * Filter which UserTravels to update
     */
    where?: UserTravelWhereInput
    /**
     * Limit how many UserTravels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTravelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTravel upsert
   */
  export type UserTravelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTravel
     */
    select?: UserTravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTravel
     */
    omit?: UserTravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTravelInclude<ExtArgs> | null
    /**
     * The filter to search for the UserTravel to update in case it exists.
     */
    where: UserTravelWhereUniqueInput
    /**
     * In case the UserTravel found by the `where` argument doesn't exist, create a new UserTravel with this data.
     */
    create: XOR<UserTravelCreateInput, UserTravelUncheckedCreateInput>
    /**
     * In case the UserTravel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTravelUpdateInput, UserTravelUncheckedUpdateInput>
  }

  /**
   * UserTravel delete
   */
  export type UserTravelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTravel
     */
    select?: UserTravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTravel
     */
    omit?: UserTravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTravelInclude<ExtArgs> | null
    /**
     * Filter which UserTravel to delete.
     */
    where: UserTravelWhereUniqueInput
  }

  /**
   * UserTravel deleteMany
   */
  export type UserTravelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTravels to delete
     */
    where?: UserTravelWhereInput
    /**
     * Limit how many UserTravels to delete.
     */
    limit?: number
  }

  /**
   * UserTravel without action
   */
  export type UserTravelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTravel
     */
    select?: UserTravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTravel
     */
    omit?: UserTravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTravelInclude<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type ExpenseSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: string | null
    travelId: string | null
    payerId: string | null
    title: string | null
    description: string | null
    amount: Decimal | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: string | null
    travelId: string | null
    payerId: string | null
    title: string | null
    description: string | null
    amount: Decimal | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    travelId: number
    payerId: number
    title: number
    description: number
    amount: number
    category: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    amount?: true
  }

  export type ExpenseSumAggregateInputType = {
    amount?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    travelId?: true
    payerId?: true
    title?: true
    description?: true
    amount?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    travelId?: true
    payerId?: true
    title?: true
    description?: true
    amount?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    travelId?: true
    payerId?: true
    title?: true
    description?: true
    amount?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: string
    travelId: string
    payerId: string
    title: string
    description: string | null
    amount: Decimal
    category: string | null
    createdAt: Date
    updatedAt: Date
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    travelId?: boolean
    payerId?: boolean
    title?: boolean
    description?: boolean
    amount?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    travel?: boolean | TravelDefaultArgs<ExtArgs>
    payer?: boolean | UserDefaultArgs<ExtArgs>
    participants?: boolean | Expense$participantsArgs<ExtArgs>
    _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    travelId?: boolean
    payerId?: boolean
    title?: boolean
    description?: boolean
    amount?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    travel?: boolean | TravelDefaultArgs<ExtArgs>
    payer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    travelId?: boolean
    payerId?: boolean
    title?: boolean
    description?: boolean
    amount?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    travel?: boolean | TravelDefaultArgs<ExtArgs>
    payer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    travelId?: boolean
    payerId?: boolean
    title?: boolean
    description?: boolean
    amount?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "travelId" | "payerId" | "title" | "description" | "amount" | "category" | "createdAt" | "updatedAt", ExtArgs["result"]["expense"]>
  export type ExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travel?: boolean | TravelDefaultArgs<ExtArgs>
    payer?: boolean | UserDefaultArgs<ExtArgs>
    participants?: boolean | Expense$participantsArgs<ExtArgs>
    _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travel?: boolean | TravelDefaultArgs<ExtArgs>
    payer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travel?: boolean | TravelDefaultArgs<ExtArgs>
    payer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {
      travel: Prisma.$TravelPayload<ExtArgs>
      payer: Prisma.$UserPayload<ExtArgs>
      participants: Prisma.$ExpenseParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      travelId: string
      payerId: string
      title: string
      description: string | null
      amount: Prisma.Decimal
      category: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    travel<T extends TravelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TravelDefaultArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participants<T extends Expense$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Expense$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expense model
   */
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'String'>
    readonly travelId: FieldRef<"Expense", 'String'>
    readonly payerId: FieldRef<"Expense", 'String'>
    readonly title: FieldRef<"Expense", 'String'>
    readonly description: FieldRef<"Expense", 'String'>
    readonly amount: FieldRef<"Expense", 'Decimal'>
    readonly category: FieldRef<"Expense", 'String'>
    readonly createdAt: FieldRef<"Expense", 'DateTime'>
    readonly updatedAt: FieldRef<"Expense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense updateManyAndReturn
   */
  export type ExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expense.participants
   */
  export type Expense$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    where?: ExpenseParticipantWhereInput
    orderBy?: ExpenseParticipantOrderByWithRelationInput | ExpenseParticipantOrderByWithRelationInput[]
    cursor?: ExpenseParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseParticipantScalarFieldEnum | ExpenseParticipantScalarFieldEnum[]
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
  }


  /**
   * Model ExpenseParticipant
   */

  export type AggregateExpenseParticipant = {
    _count: ExpenseParticipantCountAggregateOutputType | null
    _avg: ExpenseParticipantAvgAggregateOutputType | null
    _sum: ExpenseParticipantSumAggregateOutputType | null
    _min: ExpenseParticipantMinAggregateOutputType | null
    _max: ExpenseParticipantMaxAggregateOutputType | null
  }

  export type ExpenseParticipantAvgAggregateOutputType = {
    share: Decimal | null
  }

  export type ExpenseParticipantSumAggregateOutputType = {
    share: Decimal | null
  }

  export type ExpenseParticipantMinAggregateOutputType = {
    id: string | null
    expenseId: string | null
    userId: string | null
    share: Decimal | null
  }

  export type ExpenseParticipantMaxAggregateOutputType = {
    id: string | null
    expenseId: string | null
    userId: string | null
    share: Decimal | null
  }

  export type ExpenseParticipantCountAggregateOutputType = {
    id: number
    expenseId: number
    userId: number
    share: number
    _all: number
  }


  export type ExpenseParticipantAvgAggregateInputType = {
    share?: true
  }

  export type ExpenseParticipantSumAggregateInputType = {
    share?: true
  }

  export type ExpenseParticipantMinAggregateInputType = {
    id?: true
    expenseId?: true
    userId?: true
    share?: true
  }

  export type ExpenseParticipantMaxAggregateInputType = {
    id?: true
    expenseId?: true
    userId?: true
    share?: true
  }

  export type ExpenseParticipantCountAggregateInputType = {
    id?: true
    expenseId?: true
    userId?: true
    share?: true
    _all?: true
  }

  export type ExpenseParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseParticipant to aggregate.
     */
    where?: ExpenseParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseParticipants to fetch.
     */
    orderBy?: ExpenseParticipantOrderByWithRelationInput | ExpenseParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpenseParticipants
    **/
    _count?: true | ExpenseParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseParticipantMaxAggregateInputType
  }

  export type GetExpenseParticipantAggregateType<T extends ExpenseParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenseParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenseParticipant[P]>
      : GetScalarType<T[P], AggregateExpenseParticipant[P]>
  }




  export type ExpenseParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseParticipantWhereInput
    orderBy?: ExpenseParticipantOrderByWithAggregationInput | ExpenseParticipantOrderByWithAggregationInput[]
    by: ExpenseParticipantScalarFieldEnum[] | ExpenseParticipantScalarFieldEnum
    having?: ExpenseParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseParticipantCountAggregateInputType | true
    _avg?: ExpenseParticipantAvgAggregateInputType
    _sum?: ExpenseParticipantSumAggregateInputType
    _min?: ExpenseParticipantMinAggregateInputType
    _max?: ExpenseParticipantMaxAggregateInputType
  }

  export type ExpenseParticipantGroupByOutputType = {
    id: string
    expenseId: string
    userId: string
    share: Decimal
    _count: ExpenseParticipantCountAggregateOutputType | null
    _avg: ExpenseParticipantAvgAggregateOutputType | null
    _sum: ExpenseParticipantSumAggregateOutputType | null
    _min: ExpenseParticipantMinAggregateOutputType | null
    _max: ExpenseParticipantMaxAggregateOutputType | null
  }

  type GetExpenseParticipantGroupByPayload<T extends ExpenseParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    userId?: boolean
    share?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseParticipant"]>

  export type ExpenseParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    userId?: boolean
    share?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseParticipant"]>

  export type ExpenseParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expenseId?: boolean
    userId?: boolean
    share?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseParticipant"]>

  export type ExpenseParticipantSelectScalar = {
    id?: boolean
    expenseId?: boolean
    userId?: boolean
    share?: boolean
  }

  export type ExpenseParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expenseId" | "userId" | "share", ExtArgs["result"]["expenseParticipant"]>
  export type ExpenseParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExpenseParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExpenseParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExpenseParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpenseParticipant"
    objects: {
      expense: Prisma.$ExpensePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expenseId: string
      userId: string
      share: Prisma.Decimal
    }, ExtArgs["result"]["expenseParticipant"]>
    composites: {}
  }

  type ExpenseParticipantGetPayload<S extends boolean | null | undefined | ExpenseParticipantDefaultArgs> = $Result.GetResult<Prisma.$ExpenseParticipantPayload, S>

  type ExpenseParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseParticipantCountAggregateInputType | true
    }

  export interface ExpenseParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpenseParticipant'], meta: { name: 'ExpenseParticipant' } }
    /**
     * Find zero or one ExpenseParticipant that matches the filter.
     * @param {ExpenseParticipantFindUniqueArgs} args - Arguments to find a ExpenseParticipant
     * @example
     * // Get one ExpenseParticipant
     * const expenseParticipant = await prisma.expenseParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseParticipantFindUniqueArgs>(args: SelectSubset<T, ExpenseParticipantFindUniqueArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExpenseParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseParticipantFindUniqueOrThrowArgs} args - Arguments to find a ExpenseParticipant
     * @example
     * // Get one ExpenseParticipant
     * const expenseParticipant = await prisma.expenseParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseParticipantFindFirstArgs} args - Arguments to find a ExpenseParticipant
     * @example
     * // Get one ExpenseParticipant
     * const expenseParticipant = await prisma.expenseParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseParticipantFindFirstArgs>(args?: SelectSubset<T, ExpenseParticipantFindFirstArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseParticipantFindFirstOrThrowArgs} args - Arguments to find a ExpenseParticipant
     * @example
     * // Get one ExpenseParticipant
     * const expenseParticipant = await prisma.expenseParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExpenseParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpenseParticipants
     * const expenseParticipants = await prisma.expenseParticipant.findMany()
     * 
     * // Get first 10 ExpenseParticipants
     * const expenseParticipants = await prisma.expenseParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseParticipantWithIdOnly = await prisma.expenseParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseParticipantFindManyArgs>(args?: SelectSubset<T, ExpenseParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExpenseParticipant.
     * @param {ExpenseParticipantCreateArgs} args - Arguments to create a ExpenseParticipant.
     * @example
     * // Create one ExpenseParticipant
     * const ExpenseParticipant = await prisma.expenseParticipant.create({
     *   data: {
     *     // ... data to create a ExpenseParticipant
     *   }
     * })
     * 
     */
    create<T extends ExpenseParticipantCreateArgs>(args: SelectSubset<T, ExpenseParticipantCreateArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExpenseParticipants.
     * @param {ExpenseParticipantCreateManyArgs} args - Arguments to create many ExpenseParticipants.
     * @example
     * // Create many ExpenseParticipants
     * const expenseParticipant = await prisma.expenseParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseParticipantCreateManyArgs>(args?: SelectSubset<T, ExpenseParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExpenseParticipants and returns the data saved in the database.
     * @param {ExpenseParticipantCreateManyAndReturnArgs} args - Arguments to create many ExpenseParticipants.
     * @example
     * // Create many ExpenseParticipants
     * const expenseParticipant = await prisma.expenseParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExpenseParticipants and only return the `id`
     * const expenseParticipantWithIdOnly = await prisma.expenseParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExpenseParticipant.
     * @param {ExpenseParticipantDeleteArgs} args - Arguments to delete one ExpenseParticipant.
     * @example
     * // Delete one ExpenseParticipant
     * const ExpenseParticipant = await prisma.expenseParticipant.delete({
     *   where: {
     *     // ... filter to delete one ExpenseParticipant
     *   }
     * })
     * 
     */
    delete<T extends ExpenseParticipantDeleteArgs>(args: SelectSubset<T, ExpenseParticipantDeleteArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExpenseParticipant.
     * @param {ExpenseParticipantUpdateArgs} args - Arguments to update one ExpenseParticipant.
     * @example
     * // Update one ExpenseParticipant
     * const expenseParticipant = await prisma.expenseParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseParticipantUpdateArgs>(args: SelectSubset<T, ExpenseParticipantUpdateArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExpenseParticipants.
     * @param {ExpenseParticipantDeleteManyArgs} args - Arguments to filter ExpenseParticipants to delete.
     * @example
     * // Delete a few ExpenseParticipants
     * const { count } = await prisma.expenseParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseParticipantDeleteManyArgs>(args?: SelectSubset<T, ExpenseParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpenseParticipants
     * const expenseParticipant = await prisma.expenseParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseParticipantUpdateManyArgs>(args: SelectSubset<T, ExpenseParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseParticipants and returns the data updated in the database.
     * @param {ExpenseParticipantUpdateManyAndReturnArgs} args - Arguments to update many ExpenseParticipants.
     * @example
     * // Update many ExpenseParticipants
     * const expenseParticipant = await prisma.expenseParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExpenseParticipants and only return the `id`
     * const expenseParticipantWithIdOnly = await prisma.expenseParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExpenseParticipant.
     * @param {ExpenseParticipantUpsertArgs} args - Arguments to update or create a ExpenseParticipant.
     * @example
     * // Update or create a ExpenseParticipant
     * const expenseParticipant = await prisma.expenseParticipant.upsert({
     *   create: {
     *     // ... data to create a ExpenseParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpenseParticipant we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseParticipantUpsertArgs>(args: SelectSubset<T, ExpenseParticipantUpsertArgs<ExtArgs>>): Prisma__ExpenseParticipantClient<$Result.GetResult<Prisma.$ExpenseParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExpenseParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseParticipantCountArgs} args - Arguments to filter ExpenseParticipants to count.
     * @example
     * // Count the number of ExpenseParticipants
     * const count = await prisma.expenseParticipant.count({
     *   where: {
     *     // ... the filter for the ExpenseParticipants we want to count
     *   }
     * })
    **/
    count<T extends ExpenseParticipantCountArgs>(
      args?: Subset<T, ExpenseParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpenseParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseParticipantAggregateArgs>(args: Subset<T, ExpenseParticipantAggregateArgs>): Prisma.PrismaPromise<GetExpenseParticipantAggregateType<T>>

    /**
     * Group by ExpenseParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpenseParticipant model
   */
  readonly fields: ExpenseParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpenseParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expense<T extends ExpenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseDefaultArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExpenseParticipant model
   */
  interface ExpenseParticipantFieldRefs {
    readonly id: FieldRef<"ExpenseParticipant", 'String'>
    readonly expenseId: FieldRef<"ExpenseParticipant", 'String'>
    readonly userId: FieldRef<"ExpenseParticipant", 'String'>
    readonly share: FieldRef<"ExpenseParticipant", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * ExpenseParticipant findUnique
   */
  export type ExpenseParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseParticipant to fetch.
     */
    where: ExpenseParticipantWhereUniqueInput
  }

  /**
   * ExpenseParticipant findUniqueOrThrow
   */
  export type ExpenseParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseParticipant to fetch.
     */
    where: ExpenseParticipantWhereUniqueInput
  }

  /**
   * ExpenseParticipant findFirst
   */
  export type ExpenseParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseParticipant to fetch.
     */
    where?: ExpenseParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseParticipants to fetch.
     */
    orderBy?: ExpenseParticipantOrderByWithRelationInput | ExpenseParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseParticipants.
     */
    cursor?: ExpenseParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseParticipants.
     */
    distinct?: ExpenseParticipantScalarFieldEnum | ExpenseParticipantScalarFieldEnum[]
  }

  /**
   * ExpenseParticipant findFirstOrThrow
   */
  export type ExpenseParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseParticipant to fetch.
     */
    where?: ExpenseParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseParticipants to fetch.
     */
    orderBy?: ExpenseParticipantOrderByWithRelationInput | ExpenseParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseParticipants.
     */
    cursor?: ExpenseParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseParticipants.
     */
    distinct?: ExpenseParticipantScalarFieldEnum | ExpenseParticipantScalarFieldEnum[]
  }

  /**
   * ExpenseParticipant findMany
   */
  export type ExpenseParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseParticipants to fetch.
     */
    where?: ExpenseParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseParticipants to fetch.
     */
    orderBy?: ExpenseParticipantOrderByWithRelationInput | ExpenseParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpenseParticipants.
     */
    cursor?: ExpenseParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseParticipants.
     */
    skip?: number
    distinct?: ExpenseParticipantScalarFieldEnum | ExpenseParticipantScalarFieldEnum[]
  }

  /**
   * ExpenseParticipant create
   */
  export type ExpenseParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpenseParticipant.
     */
    data: XOR<ExpenseParticipantCreateInput, ExpenseParticipantUncheckedCreateInput>
  }

  /**
   * ExpenseParticipant createMany
   */
  export type ExpenseParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpenseParticipants.
     */
    data: ExpenseParticipantCreateManyInput | ExpenseParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpenseParticipant createManyAndReturn
   */
  export type ExpenseParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many ExpenseParticipants.
     */
    data: ExpenseParticipantCreateManyInput | ExpenseParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpenseParticipant update
   */
  export type ExpenseParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpenseParticipant.
     */
    data: XOR<ExpenseParticipantUpdateInput, ExpenseParticipantUncheckedUpdateInput>
    /**
     * Choose, which ExpenseParticipant to update.
     */
    where: ExpenseParticipantWhereUniqueInput
  }

  /**
   * ExpenseParticipant updateMany
   */
  export type ExpenseParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpenseParticipants.
     */
    data: XOR<ExpenseParticipantUpdateManyMutationInput, ExpenseParticipantUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseParticipants to update
     */
    where?: ExpenseParticipantWhereInput
    /**
     * Limit how many ExpenseParticipants to update.
     */
    limit?: number
  }

  /**
   * ExpenseParticipant updateManyAndReturn
   */
  export type ExpenseParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * The data used to update ExpenseParticipants.
     */
    data: XOR<ExpenseParticipantUpdateManyMutationInput, ExpenseParticipantUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseParticipants to update
     */
    where?: ExpenseParticipantWhereInput
    /**
     * Limit how many ExpenseParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpenseParticipant upsert
   */
  export type ExpenseParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpenseParticipant to update in case it exists.
     */
    where: ExpenseParticipantWhereUniqueInput
    /**
     * In case the ExpenseParticipant found by the `where` argument doesn't exist, create a new ExpenseParticipant with this data.
     */
    create: XOR<ExpenseParticipantCreateInput, ExpenseParticipantUncheckedCreateInput>
    /**
     * In case the ExpenseParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseParticipantUpdateInput, ExpenseParticipantUncheckedUpdateInput>
  }

  /**
   * ExpenseParticipant delete
   */
  export type ExpenseParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
    /**
     * Filter which ExpenseParticipant to delete.
     */
    where: ExpenseParticipantWhereUniqueInput
  }

  /**
   * ExpenseParticipant deleteMany
   */
  export type ExpenseParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseParticipants to delete
     */
    where?: ExpenseParticipantWhereInput
    /**
     * Limit how many ExpenseParticipants to delete.
     */
    limit?: number
  }

  /**
   * ExpenseParticipant without action
   */
  export type ExpenseParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseParticipant
     */
    select?: ExpenseParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseParticipant
     */
    omit?: ExpenseParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseParticipantInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    firebaseUid: 'firebaseUid',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TravelScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TravelScalarFieldEnum = (typeof TravelScalarFieldEnum)[keyof typeof TravelScalarFieldEnum]


  export const UserTravelScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    travelId: 'travelId',
    role: 'role',
    joinedAt: 'joinedAt',
    leftAt: 'leftAt',
    exitBalance: 'exitBalance'
  };

  export type UserTravelScalarFieldEnum = (typeof UserTravelScalarFieldEnum)[keyof typeof UserTravelScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    travelId: 'travelId',
    payerId: 'payerId',
    title: 'title',
    description: 'description',
    amount: 'amount',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const ExpenseParticipantScalarFieldEnum: {
    id: 'id',
    expenseId: 'expenseId',
    userId: 'userId',
    share: 'share'
  };

  export type ExpenseParticipantScalarFieldEnum = (typeof ExpenseParticipantScalarFieldEnum)[keyof typeof ExpenseParticipantScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firebaseUid?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userTravels?: UserTravelListRelationFilter
    paidExpenses?: ExpenseListRelationFilter
    expenseParticipations?: ExpenseParticipantListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firebaseUid?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userTravels?: UserTravelOrderByRelationAggregateInput
    paidExpenses?: ExpenseOrderByRelationAggregateInput
    expenseParticipations?: ExpenseParticipantOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    firebaseUid?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userTravels?: UserTravelListRelationFilter
    paidExpenses?: ExpenseListRelationFilter
    expenseParticipations?: ExpenseParticipantListRelationFilter
  }, "id" | "email" | "firebaseUid" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firebaseUid?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    firebaseUid?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TravelWhereInput = {
    AND?: TravelWhereInput | TravelWhereInput[]
    OR?: TravelWhereInput[]
    NOT?: TravelWhereInput | TravelWhereInput[]
    id?: StringFilter<"Travel"> | string
    title?: StringFilter<"Travel"> | string
    description?: StringNullableFilter<"Travel"> | string | null
    isActive?: BoolFilter<"Travel"> | boolean
    createdAt?: DateTimeFilter<"Travel"> | Date | string
    updatedAt?: DateTimeFilter<"Travel"> | Date | string
    userTravels?: UserTravelListRelationFilter
    expenses?: ExpenseListRelationFilter
  }

  export type TravelOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userTravels?: UserTravelOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
  }

  export type TravelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TravelWhereInput | TravelWhereInput[]
    OR?: TravelWhereInput[]
    NOT?: TravelWhereInput | TravelWhereInput[]
    title?: StringFilter<"Travel"> | string
    description?: StringNullableFilter<"Travel"> | string | null
    isActive?: BoolFilter<"Travel"> | boolean
    createdAt?: DateTimeFilter<"Travel"> | Date | string
    updatedAt?: DateTimeFilter<"Travel"> | Date | string
    userTravels?: UserTravelListRelationFilter
    expenses?: ExpenseListRelationFilter
  }, "id">

  export type TravelOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TravelCountOrderByAggregateInput
    _max?: TravelMaxOrderByAggregateInput
    _min?: TravelMinOrderByAggregateInput
  }

  export type TravelScalarWhereWithAggregatesInput = {
    AND?: TravelScalarWhereWithAggregatesInput | TravelScalarWhereWithAggregatesInput[]
    OR?: TravelScalarWhereWithAggregatesInput[]
    NOT?: TravelScalarWhereWithAggregatesInput | TravelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Travel"> | string
    title?: StringWithAggregatesFilter<"Travel"> | string
    description?: StringNullableWithAggregatesFilter<"Travel"> | string | null
    isActive?: BoolWithAggregatesFilter<"Travel"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Travel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Travel"> | Date | string
  }

  export type UserTravelWhereInput = {
    AND?: UserTravelWhereInput | UserTravelWhereInput[]
    OR?: UserTravelWhereInput[]
    NOT?: UserTravelWhereInput | UserTravelWhereInput[]
    id?: StringFilter<"UserTravel"> | string
    userId?: StringFilter<"UserTravel"> | string
    travelId?: StringFilter<"UserTravel"> | string
    role?: StringFilter<"UserTravel"> | string
    joinedAt?: DateTimeFilter<"UserTravel"> | Date | string
    leftAt?: DateTimeNullableFilter<"UserTravel"> | Date | string | null
    exitBalance?: DecimalNullableFilter<"UserTravel"> | Decimal | DecimalJsLike | number | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    travel?: XOR<TravelScalarRelationFilter, TravelWhereInput>
  }

  export type UserTravelOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    travelId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    exitBalance?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    travel?: TravelOrderByWithRelationInput
  }

  export type UserTravelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_travelId?: UserTravelUserIdTravelIdCompoundUniqueInput
    AND?: UserTravelWhereInput | UserTravelWhereInput[]
    OR?: UserTravelWhereInput[]
    NOT?: UserTravelWhereInput | UserTravelWhereInput[]
    userId?: StringFilter<"UserTravel"> | string
    travelId?: StringFilter<"UserTravel"> | string
    role?: StringFilter<"UserTravel"> | string
    joinedAt?: DateTimeFilter<"UserTravel"> | Date | string
    leftAt?: DateTimeNullableFilter<"UserTravel"> | Date | string | null
    exitBalance?: DecimalNullableFilter<"UserTravel"> | Decimal | DecimalJsLike | number | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    travel?: XOR<TravelScalarRelationFilter, TravelWhereInput>
  }, "id" | "userId_travelId">

  export type UserTravelOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    travelId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    exitBalance?: SortOrderInput | SortOrder
    _count?: UserTravelCountOrderByAggregateInput
    _avg?: UserTravelAvgOrderByAggregateInput
    _max?: UserTravelMaxOrderByAggregateInput
    _min?: UserTravelMinOrderByAggregateInput
    _sum?: UserTravelSumOrderByAggregateInput
  }

  export type UserTravelScalarWhereWithAggregatesInput = {
    AND?: UserTravelScalarWhereWithAggregatesInput | UserTravelScalarWhereWithAggregatesInput[]
    OR?: UserTravelScalarWhereWithAggregatesInput[]
    NOT?: UserTravelScalarWhereWithAggregatesInput | UserTravelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserTravel"> | string
    userId?: StringWithAggregatesFilter<"UserTravel"> | string
    travelId?: StringWithAggregatesFilter<"UserTravel"> | string
    role?: StringWithAggregatesFilter<"UserTravel"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"UserTravel"> | Date | string
    leftAt?: DateTimeNullableWithAggregatesFilter<"UserTravel"> | Date | string | null
    exitBalance?: DecimalNullableWithAggregatesFilter<"UserTravel"> | Decimal | DecimalJsLike | number | string | null
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: StringFilter<"Expense"> | string
    travelId?: StringFilter<"Expense"> | string
    payerId?: StringFilter<"Expense"> | string
    title?: StringFilter<"Expense"> | string
    description?: StringNullableFilter<"Expense"> | string | null
    amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    category?: StringNullableFilter<"Expense"> | string | null
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    updatedAt?: DateTimeFilter<"Expense"> | Date | string
    travel?: XOR<TravelScalarRelationFilter, TravelWhereInput>
    payer?: XOR<UserScalarRelationFilter, UserWhereInput>
    participants?: ExpenseParticipantListRelationFilter
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    travelId?: SortOrder
    payerId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    travel?: TravelOrderByWithRelationInput
    payer?: UserOrderByWithRelationInput
    participants?: ExpenseParticipantOrderByRelationAggregateInput
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    travelId?: StringFilter<"Expense"> | string
    payerId?: StringFilter<"Expense"> | string
    title?: StringFilter<"Expense"> | string
    description?: StringNullableFilter<"Expense"> | string | null
    amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    category?: StringNullableFilter<"Expense"> | string | null
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    updatedAt?: DateTimeFilter<"Expense"> | Date | string
    travel?: XOR<TravelScalarRelationFilter, TravelWhereInput>
    payer?: XOR<UserScalarRelationFilter, UserWhereInput>
    participants?: ExpenseParticipantListRelationFilter
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    travelId?: SortOrder
    payerId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Expense"> | string
    travelId?: StringWithAggregatesFilter<"Expense"> | string
    payerId?: StringWithAggregatesFilter<"Expense"> | string
    title?: StringWithAggregatesFilter<"Expense"> | string
    description?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    amount?: DecimalWithAggregatesFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    category?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
  }

  export type ExpenseParticipantWhereInput = {
    AND?: ExpenseParticipantWhereInput | ExpenseParticipantWhereInput[]
    OR?: ExpenseParticipantWhereInput[]
    NOT?: ExpenseParticipantWhereInput | ExpenseParticipantWhereInput[]
    id?: StringFilter<"ExpenseParticipant"> | string
    expenseId?: StringFilter<"ExpenseParticipant"> | string
    userId?: StringFilter<"ExpenseParticipant"> | string
    share?: DecimalFilter<"ExpenseParticipant"> | Decimal | DecimalJsLike | number | string
    expense?: XOR<ExpenseScalarRelationFilter, ExpenseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ExpenseParticipantOrderByWithRelationInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    share?: SortOrder
    expense?: ExpenseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ExpenseParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    expenseId_userId?: ExpenseParticipantExpenseIdUserIdCompoundUniqueInput
    AND?: ExpenseParticipantWhereInput | ExpenseParticipantWhereInput[]
    OR?: ExpenseParticipantWhereInput[]
    NOT?: ExpenseParticipantWhereInput | ExpenseParticipantWhereInput[]
    expenseId?: StringFilter<"ExpenseParticipant"> | string
    userId?: StringFilter<"ExpenseParticipant"> | string
    share?: DecimalFilter<"ExpenseParticipant"> | Decimal | DecimalJsLike | number | string
    expense?: XOR<ExpenseScalarRelationFilter, ExpenseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "expenseId_userId">

  export type ExpenseParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    share?: SortOrder
    _count?: ExpenseParticipantCountOrderByAggregateInput
    _avg?: ExpenseParticipantAvgOrderByAggregateInput
    _max?: ExpenseParticipantMaxOrderByAggregateInput
    _min?: ExpenseParticipantMinOrderByAggregateInput
    _sum?: ExpenseParticipantSumOrderByAggregateInput
  }

  export type ExpenseParticipantScalarWhereWithAggregatesInput = {
    AND?: ExpenseParticipantScalarWhereWithAggregatesInput | ExpenseParticipantScalarWhereWithAggregatesInput[]
    OR?: ExpenseParticipantScalarWhereWithAggregatesInput[]
    NOT?: ExpenseParticipantScalarWhereWithAggregatesInput | ExpenseParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExpenseParticipant"> | string
    expenseId?: StringWithAggregatesFilter<"ExpenseParticipant"> | string
    userId?: StringWithAggregatesFilter<"ExpenseParticipant"> | string
    share?: DecimalWithAggregatesFilter<"ExpenseParticipant"> | Decimal | DecimalJsLike | number | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    firebaseUid: string
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userTravels?: UserTravelCreateNestedManyWithoutUserInput
    paidExpenses?: ExpenseCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    firebaseUid: string
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userTravels?: UserTravelUncheckedCreateNestedManyWithoutUserInput
    paidExpenses?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTravels?: UserTravelUpdateManyWithoutUserNestedInput
    paidExpenses?: ExpenseUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTravels?: UserTravelUncheckedUpdateManyWithoutUserNestedInput
    paidExpenses?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    firebaseUid: string
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelCreateInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userTravels?: UserTravelCreateNestedManyWithoutTravelInput
    expenses?: ExpenseCreateNestedManyWithoutTravelInput
  }

  export type TravelUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userTravels?: UserTravelUncheckedCreateNestedManyWithoutTravelInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutTravelInput
  }

  export type TravelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTravels?: UserTravelUpdateManyWithoutTravelNestedInput
    expenses?: ExpenseUpdateManyWithoutTravelNestedInput
  }

  export type TravelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTravels?: UserTravelUncheckedUpdateManyWithoutTravelNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutTravelNestedInput
  }

  export type TravelCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTravelCreateInput = {
    id?: string
    role: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    exitBalance?: Decimal | DecimalJsLike | number | string | null
    user: UserCreateNestedOneWithoutUserTravelsInput
    travel: TravelCreateNestedOneWithoutUserTravelsInput
  }

  export type UserTravelUncheckedCreateInput = {
    id?: string
    userId: string
    travelId: string
    role: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    exitBalance?: Decimal | DecimalJsLike | number | string | null
  }

  export type UserTravelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exitBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    user?: UserUpdateOneRequiredWithoutUserTravelsNestedInput
    travel?: TravelUpdateOneRequiredWithoutUserTravelsNestedInput
  }

  export type UserTravelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    travelId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exitBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type UserTravelCreateManyInput = {
    id?: string
    userId: string
    travelId: string
    role: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    exitBalance?: Decimal | DecimalJsLike | number | string | null
  }

  export type UserTravelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exitBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type UserTravelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    travelId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exitBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ExpenseCreateInput = {
    id?: string
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    travel: TravelCreateNestedOneWithoutExpensesInput
    payer: UserCreateNestedOneWithoutPaidExpensesInput
    participants?: ExpenseParticipantCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateInput = {
    id?: string
    travelId: string
    payerId: string
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: ExpenseParticipantUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travel?: TravelUpdateOneRequiredWithoutExpensesNestedInput
    payer?: UserUpdateOneRequiredWithoutPaidExpensesNestedInput
    participants?: ExpenseParticipantUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    travelId?: StringFieldUpdateOperationsInput | string
    payerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ExpenseParticipantUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseCreateManyInput = {
    id?: string
    travelId: string
    payerId: string
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    travelId?: StringFieldUpdateOperationsInput | string
    payerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseParticipantCreateInput = {
    id?: string
    share: Decimal | DecimalJsLike | number | string
    expense: ExpenseCreateNestedOneWithoutParticipantsInput
    user: UserCreateNestedOneWithoutExpenseParticipationsInput
  }

  export type ExpenseParticipantUncheckedCreateInput = {
    id?: string
    expenseId: string
    userId: string
    share: Decimal | DecimalJsLike | number | string
  }

  export type ExpenseParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    share?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expense?: ExpenseUpdateOneRequiredWithoutParticipantsNestedInput
    user?: UserUpdateOneRequiredWithoutExpenseParticipationsNestedInput
  }

  export type ExpenseParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    share?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ExpenseParticipantCreateManyInput = {
    id?: string
    expenseId: string
    userId: string
    share: Decimal | DecimalJsLike | number | string
  }

  export type ExpenseParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    share?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ExpenseParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    share?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserTravelListRelationFilter = {
    every?: UserTravelWhereInput
    some?: UserTravelWhereInput
    none?: UserTravelWhereInput
  }

  export type ExpenseListRelationFilter = {
    every?: ExpenseWhereInput
    some?: ExpenseWhereInput
    none?: ExpenseWhereInput
  }

  export type ExpenseParticipantListRelationFilter = {
    every?: ExpenseParticipantWhereInput
    some?: ExpenseParticipantWhereInput
    none?: ExpenseParticipantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserTravelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firebaseUid?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firebaseUid?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firebaseUid?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TravelCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TravelMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TravelMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TravelScalarRelationFilter = {
    is?: TravelWhereInput
    isNot?: TravelWhereInput
  }

  export type UserTravelUserIdTravelIdCompoundUniqueInput = {
    userId: string
    travelId: string
  }

  export type UserTravelCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    travelId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
    exitBalance?: SortOrder
  }

  export type UserTravelAvgOrderByAggregateInput = {
    exitBalance?: SortOrder
  }

  export type UserTravelMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    travelId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
    exitBalance?: SortOrder
  }

  export type UserTravelMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    travelId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
    exitBalance?: SortOrder
  }

  export type UserTravelSumOrderByAggregateInput = {
    exitBalance?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    travelId?: SortOrder
    payerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    travelId?: SortOrder
    payerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    travelId?: SortOrder
    payerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ExpenseScalarRelationFilter = {
    is?: ExpenseWhereInput
    isNot?: ExpenseWhereInput
  }

  export type ExpenseParticipantExpenseIdUserIdCompoundUniqueInput = {
    expenseId: string
    userId: string
  }

  export type ExpenseParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    share?: SortOrder
  }

  export type ExpenseParticipantAvgOrderByAggregateInput = {
    share?: SortOrder
  }

  export type ExpenseParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    share?: SortOrder
  }

  export type ExpenseParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    expenseId?: SortOrder
    userId?: SortOrder
    share?: SortOrder
  }

  export type ExpenseParticipantSumOrderByAggregateInput = {
    share?: SortOrder
  }

  export type UserTravelCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTravelCreateWithoutUserInput, UserTravelUncheckedCreateWithoutUserInput> | UserTravelCreateWithoutUserInput[] | UserTravelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTravelCreateOrConnectWithoutUserInput | UserTravelCreateOrConnectWithoutUserInput[]
    createMany?: UserTravelCreateManyUserInputEnvelope
    connect?: UserTravelWhereUniqueInput | UserTravelWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutPayerInput = {
    create?: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput> | ExpenseCreateWithoutPayerInput[] | ExpenseUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutPayerInput | ExpenseCreateOrConnectWithoutPayerInput[]
    createMany?: ExpenseCreateManyPayerInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ExpenseParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseParticipantCreateWithoutUserInput, ExpenseParticipantUncheckedCreateWithoutUserInput> | ExpenseParticipantCreateWithoutUserInput[] | ExpenseParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutUserInput | ExpenseParticipantCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseParticipantCreateManyUserInputEnvelope
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
  }

  export type UserTravelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTravelCreateWithoutUserInput, UserTravelUncheckedCreateWithoutUserInput> | UserTravelCreateWithoutUserInput[] | UserTravelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTravelCreateOrConnectWithoutUserInput | UserTravelCreateOrConnectWithoutUserInput[]
    createMany?: UserTravelCreateManyUserInputEnvelope
    connect?: UserTravelWhereUniqueInput | UserTravelWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutPayerInput = {
    create?: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput> | ExpenseCreateWithoutPayerInput[] | ExpenseUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutPayerInput | ExpenseCreateOrConnectWithoutPayerInput[]
    createMany?: ExpenseCreateManyPayerInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ExpenseParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseParticipantCreateWithoutUserInput, ExpenseParticipantUncheckedCreateWithoutUserInput> | ExpenseParticipantCreateWithoutUserInput[] | ExpenseParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutUserInput | ExpenseParticipantCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseParticipantCreateManyUserInputEnvelope
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserTravelUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTravelCreateWithoutUserInput, UserTravelUncheckedCreateWithoutUserInput> | UserTravelCreateWithoutUserInput[] | UserTravelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTravelCreateOrConnectWithoutUserInput | UserTravelCreateOrConnectWithoutUserInput[]
    upsert?: UserTravelUpsertWithWhereUniqueWithoutUserInput | UserTravelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTravelCreateManyUserInputEnvelope
    set?: UserTravelWhereUniqueInput | UserTravelWhereUniqueInput[]
    disconnect?: UserTravelWhereUniqueInput | UserTravelWhereUniqueInput[]
    delete?: UserTravelWhereUniqueInput | UserTravelWhereUniqueInput[]
    connect?: UserTravelWhereUniqueInput | UserTravelWhereUniqueInput[]
    update?: UserTravelUpdateWithWhereUniqueWithoutUserInput | UserTravelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTravelUpdateManyWithWhereWithoutUserInput | UserTravelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTravelScalarWhereInput | UserTravelScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutPayerNestedInput = {
    create?: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput> | ExpenseCreateWithoutPayerInput[] | ExpenseUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutPayerInput | ExpenseCreateOrConnectWithoutPayerInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutPayerInput | ExpenseUpsertWithWhereUniqueWithoutPayerInput[]
    createMany?: ExpenseCreateManyPayerInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutPayerInput | ExpenseUpdateWithWhereUniqueWithoutPayerInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutPayerInput | ExpenseUpdateManyWithWhereWithoutPayerInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ExpenseParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseParticipantCreateWithoutUserInput, ExpenseParticipantUncheckedCreateWithoutUserInput> | ExpenseParticipantCreateWithoutUserInput[] | ExpenseParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutUserInput | ExpenseParticipantCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseParticipantUpsertWithWhereUniqueWithoutUserInput | ExpenseParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseParticipantCreateManyUserInputEnvelope
    set?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    disconnect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    delete?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    update?: ExpenseParticipantUpdateWithWhereUniqueWithoutUserInput | ExpenseParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseParticipantUpdateManyWithWhereWithoutUserInput | ExpenseParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseParticipantScalarWhereInput | ExpenseParticipantScalarWhereInput[]
  }

  export type UserTravelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTravelCreateWithoutUserInput, UserTravelUncheckedCreateWithoutUserInput> | UserTravelCreateWithoutUserInput[] | UserTravelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTravelCreateOrConnectWithoutUserInput | UserTravelCreateOrConnectWithoutUserInput[]
    upsert?: UserTravelUpsertWithWhereUniqueWithoutUserInput | UserTravelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTravelCreateManyUserInputEnvelope
    set?: UserTravelWhereUniqueInput | UserTravelWhereUniqueInput[]
    disconnect?: UserTravelWhereUniqueInput | UserTravelWhereUniqueInput[]
    delete?: UserTravelWhereUniqueInput | UserTravelWhereUniqueInput[]
    connect?: UserTravelWhereUniqueInput | UserTravelWhereUniqueInput[]
    update?: UserTravelUpdateWithWhereUniqueWithoutUserInput | UserTravelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTravelUpdateManyWithWhereWithoutUserInput | UserTravelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTravelScalarWhereInput | UserTravelScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutPayerNestedInput = {
    create?: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput> | ExpenseCreateWithoutPayerInput[] | ExpenseUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutPayerInput | ExpenseCreateOrConnectWithoutPayerInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutPayerInput | ExpenseUpsertWithWhereUniqueWithoutPayerInput[]
    createMany?: ExpenseCreateManyPayerInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutPayerInput | ExpenseUpdateWithWhereUniqueWithoutPayerInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutPayerInput | ExpenseUpdateManyWithWhereWithoutPayerInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ExpenseParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseParticipantCreateWithoutUserInput, ExpenseParticipantUncheckedCreateWithoutUserInput> | ExpenseParticipantCreateWithoutUserInput[] | ExpenseParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutUserInput | ExpenseParticipantCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseParticipantUpsertWithWhereUniqueWithoutUserInput | ExpenseParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseParticipantCreateManyUserInputEnvelope
    set?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    disconnect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    delete?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    update?: ExpenseParticipantUpdateWithWhereUniqueWithoutUserInput | ExpenseParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseParticipantUpdateManyWithWhereWithoutUserInput | ExpenseParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseParticipantScalarWhereInput | ExpenseParticipantScalarWhereInput[]
  }

  export type UserTravelCreateNestedManyWithoutTravelInput = {
    create?: XOR<UserTravelCreateWithoutTravelInput, UserTravelUncheckedCreateWithoutTravelInput> | UserTravelCreateWithoutTravelInput[] | UserTravelUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: UserTravelCreateOrConnectWithoutTravelInput | UserTravelCreateOrConnectWithoutTravelInput[]
    createMany?: UserTravelCreateManyTravelInputEnvelope
    connect?: UserTravelWhereUniqueInput | UserTravelWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutTravelInput = {
    create?: XOR<ExpenseCreateWithoutTravelInput, ExpenseUncheckedCreateWithoutTravelInput> | ExpenseCreateWithoutTravelInput[] | ExpenseUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutTravelInput | ExpenseCreateOrConnectWithoutTravelInput[]
    createMany?: ExpenseCreateManyTravelInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type UserTravelUncheckedCreateNestedManyWithoutTravelInput = {
    create?: XOR<UserTravelCreateWithoutTravelInput, UserTravelUncheckedCreateWithoutTravelInput> | UserTravelCreateWithoutTravelInput[] | UserTravelUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: UserTravelCreateOrConnectWithoutTravelInput | UserTravelCreateOrConnectWithoutTravelInput[]
    createMany?: UserTravelCreateManyTravelInputEnvelope
    connect?: UserTravelWhereUniqueInput | UserTravelWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutTravelInput = {
    create?: XOR<ExpenseCreateWithoutTravelInput, ExpenseUncheckedCreateWithoutTravelInput> | ExpenseCreateWithoutTravelInput[] | ExpenseUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutTravelInput | ExpenseCreateOrConnectWithoutTravelInput[]
    createMany?: ExpenseCreateManyTravelInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserTravelUpdateManyWithoutTravelNestedInput = {
    create?: XOR<UserTravelCreateWithoutTravelInput, UserTravelUncheckedCreateWithoutTravelInput> | UserTravelCreateWithoutTravelInput[] | UserTravelUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: UserTravelCreateOrConnectWithoutTravelInput | UserTravelCreateOrConnectWithoutTravelInput[]
    upsert?: UserTravelUpsertWithWhereUniqueWithoutTravelInput | UserTravelUpsertWithWhereUniqueWithoutTravelInput[]
    createMany?: UserTravelCreateManyTravelInputEnvelope
    set?: UserTravelWhereUniqueInput | UserTravelWhereUniqueInput[]
    disconnect?: UserTravelWhereUniqueInput | UserTravelWhereUniqueInput[]
    delete?: UserTravelWhereUniqueInput | UserTravelWhereUniqueInput[]
    connect?: UserTravelWhereUniqueInput | UserTravelWhereUniqueInput[]
    update?: UserTravelUpdateWithWhereUniqueWithoutTravelInput | UserTravelUpdateWithWhereUniqueWithoutTravelInput[]
    updateMany?: UserTravelUpdateManyWithWhereWithoutTravelInput | UserTravelUpdateManyWithWhereWithoutTravelInput[]
    deleteMany?: UserTravelScalarWhereInput | UserTravelScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutTravelNestedInput = {
    create?: XOR<ExpenseCreateWithoutTravelInput, ExpenseUncheckedCreateWithoutTravelInput> | ExpenseCreateWithoutTravelInput[] | ExpenseUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutTravelInput | ExpenseCreateOrConnectWithoutTravelInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutTravelInput | ExpenseUpsertWithWhereUniqueWithoutTravelInput[]
    createMany?: ExpenseCreateManyTravelInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutTravelInput | ExpenseUpdateWithWhereUniqueWithoutTravelInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutTravelInput | ExpenseUpdateManyWithWhereWithoutTravelInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type UserTravelUncheckedUpdateManyWithoutTravelNestedInput = {
    create?: XOR<UserTravelCreateWithoutTravelInput, UserTravelUncheckedCreateWithoutTravelInput> | UserTravelCreateWithoutTravelInput[] | UserTravelUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: UserTravelCreateOrConnectWithoutTravelInput | UserTravelCreateOrConnectWithoutTravelInput[]
    upsert?: UserTravelUpsertWithWhereUniqueWithoutTravelInput | UserTravelUpsertWithWhereUniqueWithoutTravelInput[]
    createMany?: UserTravelCreateManyTravelInputEnvelope
    set?: UserTravelWhereUniqueInput | UserTravelWhereUniqueInput[]
    disconnect?: UserTravelWhereUniqueInput | UserTravelWhereUniqueInput[]
    delete?: UserTravelWhereUniqueInput | UserTravelWhereUniqueInput[]
    connect?: UserTravelWhereUniqueInput | UserTravelWhereUniqueInput[]
    update?: UserTravelUpdateWithWhereUniqueWithoutTravelInput | UserTravelUpdateWithWhereUniqueWithoutTravelInput[]
    updateMany?: UserTravelUpdateManyWithWhereWithoutTravelInput | UserTravelUpdateManyWithWhereWithoutTravelInput[]
    deleteMany?: UserTravelScalarWhereInput | UserTravelScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutTravelNestedInput = {
    create?: XOR<ExpenseCreateWithoutTravelInput, ExpenseUncheckedCreateWithoutTravelInput> | ExpenseCreateWithoutTravelInput[] | ExpenseUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutTravelInput | ExpenseCreateOrConnectWithoutTravelInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutTravelInput | ExpenseUpsertWithWhereUniqueWithoutTravelInput[]
    createMany?: ExpenseCreateManyTravelInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutTravelInput | ExpenseUpdateWithWhereUniqueWithoutTravelInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutTravelInput | ExpenseUpdateManyWithWhereWithoutTravelInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserTravelsInput = {
    create?: XOR<UserCreateWithoutUserTravelsInput, UserUncheckedCreateWithoutUserTravelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTravelsInput
    connect?: UserWhereUniqueInput
  }

  export type TravelCreateNestedOneWithoutUserTravelsInput = {
    create?: XOR<TravelCreateWithoutUserTravelsInput, TravelUncheckedCreateWithoutUserTravelsInput>
    connectOrCreate?: TravelCreateOrConnectWithoutUserTravelsInput
    connect?: TravelWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutUserTravelsNestedInput = {
    create?: XOR<UserCreateWithoutUserTravelsInput, UserUncheckedCreateWithoutUserTravelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTravelsInput
    upsert?: UserUpsertWithoutUserTravelsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserTravelsInput, UserUpdateWithoutUserTravelsInput>, UserUncheckedUpdateWithoutUserTravelsInput>
  }

  export type TravelUpdateOneRequiredWithoutUserTravelsNestedInput = {
    create?: XOR<TravelCreateWithoutUserTravelsInput, TravelUncheckedCreateWithoutUserTravelsInput>
    connectOrCreate?: TravelCreateOrConnectWithoutUserTravelsInput
    upsert?: TravelUpsertWithoutUserTravelsInput
    connect?: TravelWhereUniqueInput
    update?: XOR<XOR<TravelUpdateToOneWithWhereWithoutUserTravelsInput, TravelUpdateWithoutUserTravelsInput>, TravelUncheckedUpdateWithoutUserTravelsInput>
  }

  export type TravelCreateNestedOneWithoutExpensesInput = {
    create?: XOR<TravelCreateWithoutExpensesInput, TravelUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: TravelCreateOrConnectWithoutExpensesInput
    connect?: TravelWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaidExpensesInput = {
    create?: XOR<UserCreateWithoutPaidExpensesInput, UserUncheckedCreateWithoutPaidExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaidExpensesInput
    connect?: UserWhereUniqueInput
  }

  export type ExpenseParticipantCreateNestedManyWithoutExpenseInput = {
    create?: XOR<ExpenseParticipantCreateWithoutExpenseInput, ExpenseParticipantUncheckedCreateWithoutExpenseInput> | ExpenseParticipantCreateWithoutExpenseInput[] | ExpenseParticipantUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutExpenseInput | ExpenseParticipantCreateOrConnectWithoutExpenseInput[]
    createMany?: ExpenseParticipantCreateManyExpenseInputEnvelope
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
  }

  export type ExpenseParticipantUncheckedCreateNestedManyWithoutExpenseInput = {
    create?: XOR<ExpenseParticipantCreateWithoutExpenseInput, ExpenseParticipantUncheckedCreateWithoutExpenseInput> | ExpenseParticipantCreateWithoutExpenseInput[] | ExpenseParticipantUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutExpenseInput | ExpenseParticipantCreateOrConnectWithoutExpenseInput[]
    createMany?: ExpenseParticipantCreateManyExpenseInputEnvelope
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type TravelUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<TravelCreateWithoutExpensesInput, TravelUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: TravelCreateOrConnectWithoutExpensesInput
    upsert?: TravelUpsertWithoutExpensesInput
    connect?: TravelWhereUniqueInput
    update?: XOR<XOR<TravelUpdateToOneWithWhereWithoutExpensesInput, TravelUpdateWithoutExpensesInput>, TravelUncheckedUpdateWithoutExpensesInput>
  }

  export type UserUpdateOneRequiredWithoutPaidExpensesNestedInput = {
    create?: XOR<UserCreateWithoutPaidExpensesInput, UserUncheckedCreateWithoutPaidExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaidExpensesInput
    upsert?: UserUpsertWithoutPaidExpensesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaidExpensesInput, UserUpdateWithoutPaidExpensesInput>, UserUncheckedUpdateWithoutPaidExpensesInput>
  }

  export type ExpenseParticipantUpdateManyWithoutExpenseNestedInput = {
    create?: XOR<ExpenseParticipantCreateWithoutExpenseInput, ExpenseParticipantUncheckedCreateWithoutExpenseInput> | ExpenseParticipantCreateWithoutExpenseInput[] | ExpenseParticipantUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutExpenseInput | ExpenseParticipantCreateOrConnectWithoutExpenseInput[]
    upsert?: ExpenseParticipantUpsertWithWhereUniqueWithoutExpenseInput | ExpenseParticipantUpsertWithWhereUniqueWithoutExpenseInput[]
    createMany?: ExpenseParticipantCreateManyExpenseInputEnvelope
    set?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    disconnect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    delete?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    update?: ExpenseParticipantUpdateWithWhereUniqueWithoutExpenseInput | ExpenseParticipantUpdateWithWhereUniqueWithoutExpenseInput[]
    updateMany?: ExpenseParticipantUpdateManyWithWhereWithoutExpenseInput | ExpenseParticipantUpdateManyWithWhereWithoutExpenseInput[]
    deleteMany?: ExpenseParticipantScalarWhereInput | ExpenseParticipantScalarWhereInput[]
  }

  export type ExpenseParticipantUncheckedUpdateManyWithoutExpenseNestedInput = {
    create?: XOR<ExpenseParticipantCreateWithoutExpenseInput, ExpenseParticipantUncheckedCreateWithoutExpenseInput> | ExpenseParticipantCreateWithoutExpenseInput[] | ExpenseParticipantUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ExpenseParticipantCreateOrConnectWithoutExpenseInput | ExpenseParticipantCreateOrConnectWithoutExpenseInput[]
    upsert?: ExpenseParticipantUpsertWithWhereUniqueWithoutExpenseInput | ExpenseParticipantUpsertWithWhereUniqueWithoutExpenseInput[]
    createMany?: ExpenseParticipantCreateManyExpenseInputEnvelope
    set?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    disconnect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    delete?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    connect?: ExpenseParticipantWhereUniqueInput | ExpenseParticipantWhereUniqueInput[]
    update?: ExpenseParticipantUpdateWithWhereUniqueWithoutExpenseInput | ExpenseParticipantUpdateWithWhereUniqueWithoutExpenseInput[]
    updateMany?: ExpenseParticipantUpdateManyWithWhereWithoutExpenseInput | ExpenseParticipantUpdateManyWithWhereWithoutExpenseInput[]
    deleteMany?: ExpenseParticipantScalarWhereInput | ExpenseParticipantScalarWhereInput[]
  }

  export type ExpenseCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<ExpenseCreateWithoutParticipantsInput, ExpenseUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ExpenseCreateOrConnectWithoutParticipantsInput
    connect?: ExpenseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutExpenseParticipationsInput = {
    create?: XOR<UserCreateWithoutExpenseParticipationsInput, UserUncheckedCreateWithoutExpenseParticipationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpenseParticipationsInput
    connect?: UserWhereUniqueInput
  }

  export type ExpenseUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<ExpenseCreateWithoutParticipantsInput, ExpenseUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ExpenseCreateOrConnectWithoutParticipantsInput
    upsert?: ExpenseUpsertWithoutParticipantsInput
    connect?: ExpenseWhereUniqueInput
    update?: XOR<XOR<ExpenseUpdateToOneWithWhereWithoutParticipantsInput, ExpenseUpdateWithoutParticipantsInput>, ExpenseUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateOneRequiredWithoutExpenseParticipationsNestedInput = {
    create?: XOR<UserCreateWithoutExpenseParticipationsInput, UserUncheckedCreateWithoutExpenseParticipationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpenseParticipationsInput
    upsert?: UserUpsertWithoutExpenseParticipationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExpenseParticipationsInput, UserUpdateWithoutExpenseParticipationsInput>, UserUncheckedUpdateWithoutExpenseParticipationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UserTravelCreateWithoutUserInput = {
    id?: string
    role: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    exitBalance?: Decimal | DecimalJsLike | number | string | null
    travel: TravelCreateNestedOneWithoutUserTravelsInput
  }

  export type UserTravelUncheckedCreateWithoutUserInput = {
    id?: string
    travelId: string
    role: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    exitBalance?: Decimal | DecimalJsLike | number | string | null
  }

  export type UserTravelCreateOrConnectWithoutUserInput = {
    where: UserTravelWhereUniqueInput
    create: XOR<UserTravelCreateWithoutUserInput, UserTravelUncheckedCreateWithoutUserInput>
  }

  export type UserTravelCreateManyUserInputEnvelope = {
    data: UserTravelCreateManyUserInput | UserTravelCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutPayerInput = {
    id?: string
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    travel: TravelCreateNestedOneWithoutExpensesInput
    participants?: ExpenseParticipantCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateWithoutPayerInput = {
    id?: string
    travelId: string
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: ExpenseParticipantUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseCreateOrConnectWithoutPayerInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput>
  }

  export type ExpenseCreateManyPayerInputEnvelope = {
    data: ExpenseCreateManyPayerInput | ExpenseCreateManyPayerInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseParticipantCreateWithoutUserInput = {
    id?: string
    share: Decimal | DecimalJsLike | number | string
    expense: ExpenseCreateNestedOneWithoutParticipantsInput
  }

  export type ExpenseParticipantUncheckedCreateWithoutUserInput = {
    id?: string
    expenseId: string
    share: Decimal | DecimalJsLike | number | string
  }

  export type ExpenseParticipantCreateOrConnectWithoutUserInput = {
    where: ExpenseParticipantWhereUniqueInput
    create: XOR<ExpenseParticipantCreateWithoutUserInput, ExpenseParticipantUncheckedCreateWithoutUserInput>
  }

  export type ExpenseParticipantCreateManyUserInputEnvelope = {
    data: ExpenseParticipantCreateManyUserInput | ExpenseParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserTravelUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTravelWhereUniqueInput
    update: XOR<UserTravelUpdateWithoutUserInput, UserTravelUncheckedUpdateWithoutUserInput>
    create: XOR<UserTravelCreateWithoutUserInput, UserTravelUncheckedCreateWithoutUserInput>
  }

  export type UserTravelUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTravelWhereUniqueInput
    data: XOR<UserTravelUpdateWithoutUserInput, UserTravelUncheckedUpdateWithoutUserInput>
  }

  export type UserTravelUpdateManyWithWhereWithoutUserInput = {
    where: UserTravelScalarWhereInput
    data: XOR<UserTravelUpdateManyMutationInput, UserTravelUncheckedUpdateManyWithoutUserInput>
  }

  export type UserTravelScalarWhereInput = {
    AND?: UserTravelScalarWhereInput | UserTravelScalarWhereInput[]
    OR?: UserTravelScalarWhereInput[]
    NOT?: UserTravelScalarWhereInput | UserTravelScalarWhereInput[]
    id?: StringFilter<"UserTravel"> | string
    userId?: StringFilter<"UserTravel"> | string
    travelId?: StringFilter<"UserTravel"> | string
    role?: StringFilter<"UserTravel"> | string
    joinedAt?: DateTimeFilter<"UserTravel"> | Date | string
    leftAt?: DateTimeNullableFilter<"UserTravel"> | Date | string | null
    exitBalance?: DecimalNullableFilter<"UserTravel"> | Decimal | DecimalJsLike | number | string | null
  }

  export type ExpenseUpsertWithWhereUniqueWithoutPayerInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutPayerInput, ExpenseUncheckedUpdateWithoutPayerInput>
    create: XOR<ExpenseCreateWithoutPayerInput, ExpenseUncheckedCreateWithoutPayerInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutPayerInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutPayerInput, ExpenseUncheckedUpdateWithoutPayerInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutPayerInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutPayerInput>
  }

  export type ExpenseScalarWhereInput = {
    AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    OR?: ExpenseScalarWhereInput[]
    NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    id?: StringFilter<"Expense"> | string
    travelId?: StringFilter<"Expense"> | string
    payerId?: StringFilter<"Expense"> | string
    title?: StringFilter<"Expense"> | string
    description?: StringNullableFilter<"Expense"> | string | null
    amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    category?: StringNullableFilter<"Expense"> | string | null
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    updatedAt?: DateTimeFilter<"Expense"> | Date | string
  }

  export type ExpenseParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: ExpenseParticipantWhereUniqueInput
    update: XOR<ExpenseParticipantUpdateWithoutUserInput, ExpenseParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<ExpenseParticipantCreateWithoutUserInput, ExpenseParticipantUncheckedCreateWithoutUserInput>
  }

  export type ExpenseParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: ExpenseParticipantWhereUniqueInput
    data: XOR<ExpenseParticipantUpdateWithoutUserInput, ExpenseParticipantUncheckedUpdateWithoutUserInput>
  }

  export type ExpenseParticipantUpdateManyWithWhereWithoutUserInput = {
    where: ExpenseParticipantScalarWhereInput
    data: XOR<ExpenseParticipantUpdateManyMutationInput, ExpenseParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type ExpenseParticipantScalarWhereInput = {
    AND?: ExpenseParticipantScalarWhereInput | ExpenseParticipantScalarWhereInput[]
    OR?: ExpenseParticipantScalarWhereInput[]
    NOT?: ExpenseParticipantScalarWhereInput | ExpenseParticipantScalarWhereInput[]
    id?: StringFilter<"ExpenseParticipant"> | string
    expenseId?: StringFilter<"ExpenseParticipant"> | string
    userId?: StringFilter<"ExpenseParticipant"> | string
    share?: DecimalFilter<"ExpenseParticipant"> | Decimal | DecimalJsLike | number | string
  }

  export type UserTravelCreateWithoutTravelInput = {
    id?: string
    role: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    exitBalance?: Decimal | DecimalJsLike | number | string | null
    user: UserCreateNestedOneWithoutUserTravelsInput
  }

  export type UserTravelUncheckedCreateWithoutTravelInput = {
    id?: string
    userId: string
    role: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    exitBalance?: Decimal | DecimalJsLike | number | string | null
  }

  export type UserTravelCreateOrConnectWithoutTravelInput = {
    where: UserTravelWhereUniqueInput
    create: XOR<UserTravelCreateWithoutTravelInput, UserTravelUncheckedCreateWithoutTravelInput>
  }

  export type UserTravelCreateManyTravelInputEnvelope = {
    data: UserTravelCreateManyTravelInput | UserTravelCreateManyTravelInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutTravelInput = {
    id?: string
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payer: UserCreateNestedOneWithoutPaidExpensesInput
    participants?: ExpenseParticipantCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateWithoutTravelInput = {
    id?: string
    payerId: string
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: ExpenseParticipantUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseCreateOrConnectWithoutTravelInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutTravelInput, ExpenseUncheckedCreateWithoutTravelInput>
  }

  export type ExpenseCreateManyTravelInputEnvelope = {
    data: ExpenseCreateManyTravelInput | ExpenseCreateManyTravelInput[]
    skipDuplicates?: boolean
  }

  export type UserTravelUpsertWithWhereUniqueWithoutTravelInput = {
    where: UserTravelWhereUniqueInput
    update: XOR<UserTravelUpdateWithoutTravelInput, UserTravelUncheckedUpdateWithoutTravelInput>
    create: XOR<UserTravelCreateWithoutTravelInput, UserTravelUncheckedCreateWithoutTravelInput>
  }

  export type UserTravelUpdateWithWhereUniqueWithoutTravelInput = {
    where: UserTravelWhereUniqueInput
    data: XOR<UserTravelUpdateWithoutTravelInput, UserTravelUncheckedUpdateWithoutTravelInput>
  }

  export type UserTravelUpdateManyWithWhereWithoutTravelInput = {
    where: UserTravelScalarWhereInput
    data: XOR<UserTravelUpdateManyMutationInput, UserTravelUncheckedUpdateManyWithoutTravelInput>
  }

  export type ExpenseUpsertWithWhereUniqueWithoutTravelInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutTravelInput, ExpenseUncheckedUpdateWithoutTravelInput>
    create: XOR<ExpenseCreateWithoutTravelInput, ExpenseUncheckedCreateWithoutTravelInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutTravelInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutTravelInput, ExpenseUncheckedUpdateWithoutTravelInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutTravelInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutTravelInput>
  }

  export type UserCreateWithoutUserTravelsInput = {
    id?: string
    email: string
    firebaseUid: string
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paidExpenses?: ExpenseCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserTravelsInput = {
    id?: string
    email: string
    firebaseUid: string
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paidExpenses?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
    expenseParticipations?: ExpenseParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserTravelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserTravelsInput, UserUncheckedCreateWithoutUserTravelsInput>
  }

  export type TravelCreateWithoutUserTravelsInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    expenses?: ExpenseCreateNestedManyWithoutTravelInput
  }

  export type TravelUncheckedCreateWithoutUserTravelsInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    expenses?: ExpenseUncheckedCreateNestedManyWithoutTravelInput
  }

  export type TravelCreateOrConnectWithoutUserTravelsInput = {
    where: TravelWhereUniqueInput
    create: XOR<TravelCreateWithoutUserTravelsInput, TravelUncheckedCreateWithoutUserTravelsInput>
  }

  export type UserUpsertWithoutUserTravelsInput = {
    update: XOR<UserUpdateWithoutUserTravelsInput, UserUncheckedUpdateWithoutUserTravelsInput>
    create: XOR<UserCreateWithoutUserTravelsInput, UserUncheckedCreateWithoutUserTravelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserTravelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserTravelsInput, UserUncheckedUpdateWithoutUserTravelsInput>
  }

  export type UserUpdateWithoutUserTravelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidExpenses?: ExpenseUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserTravelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paidExpenses?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
    expenseParticipations?: ExpenseParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TravelUpsertWithoutUserTravelsInput = {
    update: XOR<TravelUpdateWithoutUserTravelsInput, TravelUncheckedUpdateWithoutUserTravelsInput>
    create: XOR<TravelCreateWithoutUserTravelsInput, TravelUncheckedCreateWithoutUserTravelsInput>
    where?: TravelWhereInput
  }

  export type TravelUpdateToOneWithWhereWithoutUserTravelsInput = {
    where?: TravelWhereInput
    data: XOR<TravelUpdateWithoutUserTravelsInput, TravelUncheckedUpdateWithoutUserTravelsInput>
  }

  export type TravelUpdateWithoutUserTravelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: ExpenseUpdateManyWithoutTravelNestedInput
  }

  export type TravelUncheckedUpdateWithoutUserTravelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: ExpenseUncheckedUpdateManyWithoutTravelNestedInput
  }

  export type TravelCreateWithoutExpensesInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userTravels?: UserTravelCreateNestedManyWithoutTravelInput
  }

  export type TravelUncheckedCreateWithoutExpensesInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userTravels?: UserTravelUncheckedCreateNestedManyWithoutTravelInput
  }

  export type TravelCreateOrConnectWithoutExpensesInput = {
    where: TravelWhereUniqueInput
    create: XOR<TravelCreateWithoutExpensesInput, TravelUncheckedCreateWithoutExpensesInput>
  }

  export type UserCreateWithoutPaidExpensesInput = {
    id?: string
    email: string
    firebaseUid: string
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userTravels?: UserTravelCreateNestedManyWithoutUserInput
    expenseParticipations?: ExpenseParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaidExpensesInput = {
    id?: string
    email: string
    firebaseUid: string
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userTravels?: UserTravelUncheckedCreateNestedManyWithoutUserInput
    expenseParticipations?: ExpenseParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaidExpensesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaidExpensesInput, UserUncheckedCreateWithoutPaidExpensesInput>
  }

  export type ExpenseParticipantCreateWithoutExpenseInput = {
    id?: string
    share: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutExpenseParticipationsInput
  }

  export type ExpenseParticipantUncheckedCreateWithoutExpenseInput = {
    id?: string
    userId: string
    share: Decimal | DecimalJsLike | number | string
  }

  export type ExpenseParticipantCreateOrConnectWithoutExpenseInput = {
    where: ExpenseParticipantWhereUniqueInput
    create: XOR<ExpenseParticipantCreateWithoutExpenseInput, ExpenseParticipantUncheckedCreateWithoutExpenseInput>
  }

  export type ExpenseParticipantCreateManyExpenseInputEnvelope = {
    data: ExpenseParticipantCreateManyExpenseInput | ExpenseParticipantCreateManyExpenseInput[]
    skipDuplicates?: boolean
  }

  export type TravelUpsertWithoutExpensesInput = {
    update: XOR<TravelUpdateWithoutExpensesInput, TravelUncheckedUpdateWithoutExpensesInput>
    create: XOR<TravelCreateWithoutExpensesInput, TravelUncheckedCreateWithoutExpensesInput>
    where?: TravelWhereInput
  }

  export type TravelUpdateToOneWithWhereWithoutExpensesInput = {
    where?: TravelWhereInput
    data: XOR<TravelUpdateWithoutExpensesInput, TravelUncheckedUpdateWithoutExpensesInput>
  }

  export type TravelUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTravels?: UserTravelUpdateManyWithoutTravelNestedInput
  }

  export type TravelUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTravels?: UserTravelUncheckedUpdateManyWithoutTravelNestedInput
  }

  export type UserUpsertWithoutPaidExpensesInput = {
    update: XOR<UserUpdateWithoutPaidExpensesInput, UserUncheckedUpdateWithoutPaidExpensesInput>
    create: XOR<UserCreateWithoutPaidExpensesInput, UserUncheckedCreateWithoutPaidExpensesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaidExpensesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaidExpensesInput, UserUncheckedUpdateWithoutPaidExpensesInput>
  }

  export type UserUpdateWithoutPaidExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTravels?: UserTravelUpdateManyWithoutUserNestedInput
    expenseParticipations?: ExpenseParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaidExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTravels?: UserTravelUncheckedUpdateManyWithoutUserNestedInput
    expenseParticipations?: ExpenseParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExpenseParticipantUpsertWithWhereUniqueWithoutExpenseInput = {
    where: ExpenseParticipantWhereUniqueInput
    update: XOR<ExpenseParticipantUpdateWithoutExpenseInput, ExpenseParticipantUncheckedUpdateWithoutExpenseInput>
    create: XOR<ExpenseParticipantCreateWithoutExpenseInput, ExpenseParticipantUncheckedCreateWithoutExpenseInput>
  }

  export type ExpenseParticipantUpdateWithWhereUniqueWithoutExpenseInput = {
    where: ExpenseParticipantWhereUniqueInput
    data: XOR<ExpenseParticipantUpdateWithoutExpenseInput, ExpenseParticipantUncheckedUpdateWithoutExpenseInput>
  }

  export type ExpenseParticipantUpdateManyWithWhereWithoutExpenseInput = {
    where: ExpenseParticipantScalarWhereInput
    data: XOR<ExpenseParticipantUpdateManyMutationInput, ExpenseParticipantUncheckedUpdateManyWithoutExpenseInput>
  }

  export type ExpenseCreateWithoutParticipantsInput = {
    id?: string
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    travel: TravelCreateNestedOneWithoutExpensesInput
    payer: UserCreateNestedOneWithoutPaidExpensesInput
  }

  export type ExpenseUncheckedCreateWithoutParticipantsInput = {
    id?: string
    travelId: string
    payerId: string
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseCreateOrConnectWithoutParticipantsInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutParticipantsInput, ExpenseUncheckedCreateWithoutParticipantsInput>
  }

  export type UserCreateWithoutExpenseParticipationsInput = {
    id?: string
    email: string
    firebaseUid: string
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userTravels?: UserTravelCreateNestedManyWithoutUserInput
    paidExpenses?: ExpenseCreateNestedManyWithoutPayerInput
  }

  export type UserUncheckedCreateWithoutExpenseParticipationsInput = {
    id?: string
    email: string
    firebaseUid: string
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userTravels?: UserTravelUncheckedCreateNestedManyWithoutUserInput
    paidExpenses?: ExpenseUncheckedCreateNestedManyWithoutPayerInput
  }

  export type UserCreateOrConnectWithoutExpenseParticipationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExpenseParticipationsInput, UserUncheckedCreateWithoutExpenseParticipationsInput>
  }

  export type ExpenseUpsertWithoutParticipantsInput = {
    update: XOR<ExpenseUpdateWithoutParticipantsInput, ExpenseUncheckedUpdateWithoutParticipantsInput>
    create: XOR<ExpenseCreateWithoutParticipantsInput, ExpenseUncheckedCreateWithoutParticipantsInput>
    where?: ExpenseWhereInput
  }

  export type ExpenseUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: ExpenseWhereInput
    data: XOR<ExpenseUpdateWithoutParticipantsInput, ExpenseUncheckedUpdateWithoutParticipantsInput>
  }

  export type ExpenseUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travel?: TravelUpdateOneRequiredWithoutExpensesNestedInput
    payer?: UserUpdateOneRequiredWithoutPaidExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    travelId?: StringFieldUpdateOperationsInput | string
    payerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutExpenseParticipationsInput = {
    update: XOR<UserUpdateWithoutExpenseParticipationsInput, UserUncheckedUpdateWithoutExpenseParticipationsInput>
    create: XOR<UserCreateWithoutExpenseParticipationsInput, UserUncheckedCreateWithoutExpenseParticipationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExpenseParticipationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExpenseParticipationsInput, UserUncheckedUpdateWithoutExpenseParticipationsInput>
  }

  export type UserUpdateWithoutExpenseParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTravels?: UserTravelUpdateManyWithoutUserNestedInput
    paidExpenses?: ExpenseUpdateManyWithoutPayerNestedInput
  }

  export type UserUncheckedUpdateWithoutExpenseParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTravels?: UserTravelUncheckedUpdateManyWithoutUserNestedInput
    paidExpenses?: ExpenseUncheckedUpdateManyWithoutPayerNestedInput
  }

  export type UserTravelCreateManyUserInput = {
    id?: string
    travelId: string
    role: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    exitBalance?: Decimal | DecimalJsLike | number | string | null
  }

  export type ExpenseCreateManyPayerInput = {
    id?: string
    travelId: string
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpenseParticipantCreateManyUserInput = {
    id?: string
    expenseId: string
    share: Decimal | DecimalJsLike | number | string
  }

  export type UserTravelUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exitBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    travel?: TravelUpdateOneRequiredWithoutUserTravelsNestedInput
  }

  export type UserTravelUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    travelId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exitBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type UserTravelUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    travelId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exitBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ExpenseUpdateWithoutPayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travel?: TravelUpdateOneRequiredWithoutExpensesNestedInput
    participants?: ExpenseParticipantUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutPayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    travelId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ExpenseParticipantUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateManyWithoutPayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    travelId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseParticipantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    share?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expense?: ExpenseUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ExpenseParticipantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    share?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ExpenseParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expenseId?: StringFieldUpdateOperationsInput | string
    share?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type UserTravelCreateManyTravelInput = {
    id?: string
    userId: string
    role: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    exitBalance?: Decimal | DecimalJsLike | number | string | null
  }

  export type ExpenseCreateManyTravelInput = {
    id?: string
    payerId: string
    title: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTravelUpdateWithoutTravelInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exitBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    user?: UserUpdateOneRequiredWithoutUserTravelsNestedInput
  }

  export type UserTravelUncheckedUpdateWithoutTravelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exitBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type UserTravelUncheckedUpdateManyWithoutTravelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exitBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ExpenseUpdateWithoutTravelInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payer?: UserUpdateOneRequiredWithoutPaidExpensesNestedInput
    participants?: ExpenseParticipantUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutTravelInput = {
    id?: StringFieldUpdateOperationsInput | string
    payerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: ExpenseParticipantUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateManyWithoutTravelInput = {
    id?: StringFieldUpdateOperationsInput | string
    payerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseParticipantCreateManyExpenseInput = {
    id?: string
    userId: string
    share: Decimal | DecimalJsLike | number | string
  }

  export type ExpenseParticipantUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    share?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutExpenseParticipationsNestedInput
  }

  export type ExpenseParticipantUncheckedUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    share?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ExpenseParticipantUncheckedUpdateManyWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    share?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}