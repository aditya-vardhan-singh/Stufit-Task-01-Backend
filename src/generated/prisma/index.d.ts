
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
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model ExaminationSession
 * 
 */
export type ExaminationSession = $Result.DefaultSelection<Prisma.$ExaminationSessionPayload>
/**
 * Model Examination
 * 
 */
export type Examination = $Result.DefaultSelection<Prisma.$ExaminationPayload>
/**
 * Model DiagnosisCategory
 * 
 */
export type DiagnosisCategory = $Result.DefaultSelection<Prisma.$DiagnosisCategoryPayload>
/**
 * Model Disease
 * 
 */
export type Disease = $Result.DefaultSelection<Prisma.$DiseasePayload>
/**
 * Model Diagnosis
 * 
 */
export type Diagnosis = $Result.DefaultSelection<Prisma.$DiagnosisPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  DOCTOR: 'DOCTOR',
  NURSE: 'NURSE'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Schools
 * const schools = await prisma.school.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Schools
   * const schools = await prisma.school.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examinationSession`: Exposes CRUD operations for the **ExaminationSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExaminationSessions
    * const examinationSessions = await prisma.examinationSession.findMany()
    * ```
    */
  get examinationSession(): Prisma.ExaminationSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examination`: Exposes CRUD operations for the **Examination** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Examinations
    * const examinations = await prisma.examination.findMany()
    * ```
    */
  get examination(): Prisma.ExaminationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diagnosisCategory`: Exposes CRUD operations for the **DiagnosisCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiagnosisCategories
    * const diagnosisCategories = await prisma.diagnosisCategory.findMany()
    * ```
    */
  get diagnosisCategory(): Prisma.DiagnosisCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disease`: Exposes CRUD operations for the **Disease** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diseases
    * const diseases = await prisma.disease.findMany()
    * ```
    */
  get disease(): Prisma.DiseaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diagnosis`: Exposes CRUD operations for the **Diagnosis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diagnoses
    * const diagnoses = await prisma.diagnosis.findMany()
    * ```
    */
  get diagnosis(): Prisma.DiagnosisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.0
   * Query Engine version: 9c30299f5a0ea26a96790e13f796dc6094db3173
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
    School: 'School',
    Student: 'Student',
    ExaminationSession: 'ExaminationSession',
    Examination: 'Examination',
    DiagnosisCategory: 'DiagnosisCategory',
    Disease: 'Disease',
    Diagnosis: 'Diagnosis',
    User: 'User'
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
      modelProps: "school" | "student" | "examinationSession" | "examination" | "diagnosisCategory" | "disease" | "diagnosis" | "user"
      txIsolationLevel: never
    }
    model: {
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SchoolFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SchoolAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.StudentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.StudentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      ExaminationSession: {
        payload: Prisma.$ExaminationSessionPayload<ExtArgs>
        fields: Prisma.ExaminationSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExaminationSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExaminationSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationSessionPayload>
          }
          findFirst: {
            args: Prisma.ExaminationSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExaminationSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationSessionPayload>
          }
          findMany: {
            args: Prisma.ExaminationSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationSessionPayload>[]
          }
          create: {
            args: Prisma.ExaminationSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationSessionPayload>
          }
          createMany: {
            args: Prisma.ExaminationSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExaminationSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationSessionPayload>
          }
          update: {
            args: Prisma.ExaminationSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationSessionPayload>
          }
          deleteMany: {
            args: Prisma.ExaminationSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExaminationSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExaminationSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationSessionPayload>
          }
          aggregate: {
            args: Prisma.ExaminationSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExaminationSession>
          }
          groupBy: {
            args: Prisma.ExaminationSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExaminationSessionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ExaminationSessionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ExaminationSessionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ExaminationSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ExaminationSessionCountAggregateOutputType> | number
          }
        }
      }
      Examination: {
        payload: Prisma.$ExaminationPayload<ExtArgs>
        fields: Prisma.ExaminationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExaminationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExaminationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>
          }
          findFirst: {
            args: Prisma.ExaminationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExaminationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>
          }
          findMany: {
            args: Prisma.ExaminationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>[]
          }
          create: {
            args: Prisma.ExaminationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>
          }
          createMany: {
            args: Prisma.ExaminationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExaminationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>
          }
          update: {
            args: Prisma.ExaminationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>
          }
          deleteMany: {
            args: Prisma.ExaminationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExaminationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExaminationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExaminationPayload>
          }
          aggregate: {
            args: Prisma.ExaminationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamination>
          }
          groupBy: {
            args: Prisma.ExaminationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExaminationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ExaminationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ExaminationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ExaminationCountArgs<ExtArgs>
            result: $Utils.Optional<ExaminationCountAggregateOutputType> | number
          }
        }
      }
      DiagnosisCategory: {
        payload: Prisma.$DiagnosisCategoryPayload<ExtArgs>
        fields: Prisma.DiagnosisCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiagnosisCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiagnosisCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisCategoryPayload>
          }
          findFirst: {
            args: Prisma.DiagnosisCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiagnosisCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisCategoryPayload>
          }
          findMany: {
            args: Prisma.DiagnosisCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisCategoryPayload>[]
          }
          create: {
            args: Prisma.DiagnosisCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisCategoryPayload>
          }
          createMany: {
            args: Prisma.DiagnosisCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DiagnosisCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisCategoryPayload>
          }
          update: {
            args: Prisma.DiagnosisCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisCategoryPayload>
          }
          deleteMany: {
            args: Prisma.DiagnosisCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiagnosisCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiagnosisCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisCategoryPayload>
          }
          aggregate: {
            args: Prisma.DiagnosisCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnosisCategory>
          }
          groupBy: {
            args: Prisma.DiagnosisCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosisCategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DiagnosisCategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DiagnosisCategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DiagnosisCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosisCategoryCountAggregateOutputType> | number
          }
        }
      }
      Disease: {
        payload: Prisma.$DiseasePayload<ExtArgs>
        fields: Prisma.DiseaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiseaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiseaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          findFirst: {
            args: Prisma.DiseaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiseaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          findMany: {
            args: Prisma.DiseaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>[]
          }
          create: {
            args: Prisma.DiseaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          createMany: {
            args: Prisma.DiseaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DiseaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          update: {
            args: Prisma.DiseaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          deleteMany: {
            args: Prisma.DiseaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiseaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiseaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          aggregate: {
            args: Prisma.DiseaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisease>
          }
          groupBy: {
            args: Prisma.DiseaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiseaseGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DiseaseFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DiseaseAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DiseaseCountArgs<ExtArgs>
            result: $Utils.Optional<DiseaseCountAggregateOutputType> | number
          }
        }
      }
      Diagnosis: {
        payload: Prisma.$DiagnosisPayload<ExtArgs>
        fields: Prisma.DiagnosisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiagnosisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiagnosisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>
          }
          findFirst: {
            args: Prisma.DiagnosisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiagnosisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>
          }
          findMany: {
            args: Prisma.DiagnosisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>[]
          }
          create: {
            args: Prisma.DiagnosisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>
          }
          createMany: {
            args: Prisma.DiagnosisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DiagnosisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>
          }
          update: {
            args: Prisma.DiagnosisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>
          }
          deleteMany: {
            args: Prisma.DiagnosisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiagnosisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiagnosisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosisPayload>
          }
          aggregate: {
            args: Prisma.DiagnosisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnosis>
          }
          groupBy: {
            args: Prisma.DiagnosisGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosisGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DiagnosisFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DiagnosisAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DiagnosisCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosisCountAggregateOutputType> | number
          }
        }
      }
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    school?: SchoolOmit
    student?: StudentOmit
    examinationSession?: ExaminationSessionOmit
    examination?: ExaminationOmit
    diagnosisCategory?: DiagnosisCategoryOmit
    disease?: DiseaseOmit
    diagnosis?: DiagnosisOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    students: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | SchoolCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    examinations: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examinations?: boolean | StudentCountOutputTypeCountExaminationsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountExaminationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExaminationWhereInput
  }


  /**
   * Count Type ExaminationSessionCountOutputType
   */

  export type ExaminationSessionCountOutputType = {
    examinations: number
  }

  export type ExaminationSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examinations?: boolean | ExaminationSessionCountOutputTypeCountExaminationsArgs
  }

  // Custom InputTypes
  /**
   * ExaminationSessionCountOutputType without action
   */
  export type ExaminationSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExaminationSessionCountOutputType
     */
    select?: ExaminationSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExaminationSessionCountOutputType without action
   */
  export type ExaminationSessionCountOutputTypeCountExaminationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExaminationWhereInput
  }


  /**
   * Count Type ExaminationCountOutputType
   */

  export type ExaminationCountOutputType = {
    diagnoses: number
  }

  export type ExaminationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnoses?: boolean | ExaminationCountOutputTypeCountDiagnosesArgs
  }

  // Custom InputTypes
  /**
   * ExaminationCountOutputType without action
   */
  export type ExaminationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExaminationCountOutputType
     */
    select?: ExaminationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExaminationCountOutputType without action
   */
  export type ExaminationCountOutputTypeCountDiagnosesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosisWhereInput
  }


  /**
   * Count Type DiagnosisCategoryCountOutputType
   */

  export type DiagnosisCategoryCountOutputType = {
    diseases: number
  }

  export type DiagnosisCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diseases?: boolean | DiagnosisCategoryCountOutputTypeCountDiseasesArgs
  }

  // Custom InputTypes
  /**
   * DiagnosisCategoryCountOutputType without action
   */
  export type DiagnosisCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosisCategoryCountOutputType
     */
    select?: DiagnosisCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiagnosisCategoryCountOutputType without action
   */
  export type DiagnosisCategoryCountOutputTypeCountDiseasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiseaseWhereInput
  }


  /**
   * Count Type DiseaseCountOutputType
   */

  export type DiseaseCountOutputType = {
    diagnoses: number
  }

  export type DiseaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnoses?: boolean | DiseaseCountOutputTypeCountDiagnosesArgs
  }

  // Custom InputTypes
  /**
   * DiseaseCountOutputType without action
   */
  export type DiseaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseCountOutputType
     */
    select?: DiseaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiseaseCountOutputType without action
   */
  export type DiseaseCountOutputTypeCountDiagnosesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosisWhereInput
  }


  /**
   * Models
   */

  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    createdAt: Date | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    createdAt: Date | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    name: number
    address: number
    createdAt: number
    _all: number
  }


  export type SchoolMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdAt?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdAt?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdAt?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: string
    name: string
    address: string
    createdAt: Date
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    students?: boolean | School$studentsArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>



  export type SchoolSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "createdAt", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | School$studentsArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      createdAt: Date
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * @param {SchoolFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const school = await prisma.school.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SchoolFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a School.
     * @param {SchoolAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const school = await prisma.school.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SchoolAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
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
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends School$studentsArgs<ExtArgs> = {}>(args?: Subset<T, School$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the School model
   */
  interface SchoolFieldRefs {
    readonly id: FieldRef<"School", 'String'>
    readonly name: FieldRef<"School", 'String'>
    readonly address: FieldRef<"School", 'String'>
    readonly createdAt: FieldRef<"School", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to delete.
     */
    limit?: number
  }

  /**
   * School findRaw
   */
  export type SchoolFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * School aggregateRaw
   */
  export type SchoolAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * School.students
   */
  export type School$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    name: string | null
    gender: string | null
    dob: Date | null
    schoolId: string | null
    createdAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    gender: string | null
    dob: Date | null
    schoolId: string | null
    createdAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    gender: number
    dob: number
    schoolId: number
    createdAt: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    dob?: true
    schoolId?: true
    createdAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    dob?: true
    schoolId?: true
    createdAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    dob?: true
    schoolId?: true
    createdAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    name: string
    gender: string
    dob: Date
    schoolId: string
    createdAt: Date
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    dob?: boolean
    schoolId?: boolean
    createdAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    examinations?: boolean | Student$examinationsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type StudentSelectScalar = {
    id?: boolean
    name?: boolean
    gender?: boolean
    dob?: boolean
    schoolId?: boolean
    createdAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "gender" | "dob" | "schoolId" | "createdAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    examinations?: boolean | Student$examinationsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
      examinations: Prisma.$ExaminationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      gender: string
      dob: Date
      schoolId: string
      createdAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * @param {StudentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const student = await prisma.student.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: StudentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Student.
     * @param {StudentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const student = await prisma.student.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: StudentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    examinations<T extends Student$examinationsArgs<ExtArgs> = {}>(args?: Subset<T, Student$examinationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly gender: FieldRef<"Student", 'String'>
    readonly dob: FieldRef<"Student", 'DateTime'>
    readonly schoolId: FieldRef<"Student", 'String'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student findRaw
   */
  export type StudentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Student aggregateRaw
   */
  export type StudentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Student.examinations
   */
  export type Student$examinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    where?: ExaminationWhereInput
    orderBy?: ExaminationOrderByWithRelationInput | ExaminationOrderByWithRelationInput[]
    cursor?: ExaminationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExaminationScalarFieldEnum | ExaminationScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model ExaminationSession
   */

  export type AggregateExaminationSession = {
    _count: ExaminationSessionCountAggregateOutputType | null
    _avg: ExaminationSessionAvgAggregateOutputType | null
    _sum: ExaminationSessionSumAggregateOutputType | null
    _min: ExaminationSessionMinAggregateOutputType | null
    _max: ExaminationSessionMaxAggregateOutputType | null
  }

  export type ExaminationSessionAvgAggregateOutputType = {
    year: number | null
  }

  export type ExaminationSessionSumAggregateOutputType = {
    year: number | null
  }

  export type ExaminationSessionMinAggregateOutputType = {
    id: string | null
    year: number | null
    sessionName: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
  }

  export type ExaminationSessionMaxAggregateOutputType = {
    id: string | null
    year: number | null
    sessionName: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
  }

  export type ExaminationSessionCountAggregateOutputType = {
    id: number
    year: number
    sessionName: number
    startDate: number
    endDate: number
    createdAt: number
    _all: number
  }


  export type ExaminationSessionAvgAggregateInputType = {
    year?: true
  }

  export type ExaminationSessionSumAggregateInputType = {
    year?: true
  }

  export type ExaminationSessionMinAggregateInputType = {
    id?: true
    year?: true
    sessionName?: true
    startDate?: true
    endDate?: true
    createdAt?: true
  }

  export type ExaminationSessionMaxAggregateInputType = {
    id?: true
    year?: true
    sessionName?: true
    startDate?: true
    endDate?: true
    createdAt?: true
  }

  export type ExaminationSessionCountAggregateInputType = {
    id?: true
    year?: true
    sessionName?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    _all?: true
  }

  export type ExaminationSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExaminationSession to aggregate.
     */
    where?: ExaminationSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExaminationSessions to fetch.
     */
    orderBy?: ExaminationSessionOrderByWithRelationInput | ExaminationSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExaminationSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExaminationSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExaminationSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExaminationSessions
    **/
    _count?: true | ExaminationSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExaminationSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExaminationSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExaminationSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExaminationSessionMaxAggregateInputType
  }

  export type GetExaminationSessionAggregateType<T extends ExaminationSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateExaminationSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExaminationSession[P]>
      : GetScalarType<T[P], AggregateExaminationSession[P]>
  }




  export type ExaminationSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExaminationSessionWhereInput
    orderBy?: ExaminationSessionOrderByWithAggregationInput | ExaminationSessionOrderByWithAggregationInput[]
    by: ExaminationSessionScalarFieldEnum[] | ExaminationSessionScalarFieldEnum
    having?: ExaminationSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExaminationSessionCountAggregateInputType | true
    _avg?: ExaminationSessionAvgAggregateInputType
    _sum?: ExaminationSessionSumAggregateInputType
    _min?: ExaminationSessionMinAggregateInputType
    _max?: ExaminationSessionMaxAggregateInputType
  }

  export type ExaminationSessionGroupByOutputType = {
    id: string
    year: number
    sessionName: string
    startDate: Date
    endDate: Date
    createdAt: Date
    _count: ExaminationSessionCountAggregateOutputType | null
    _avg: ExaminationSessionAvgAggregateOutputType | null
    _sum: ExaminationSessionSumAggregateOutputType | null
    _min: ExaminationSessionMinAggregateOutputType | null
    _max: ExaminationSessionMaxAggregateOutputType | null
  }

  type GetExaminationSessionGroupByPayload<T extends ExaminationSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExaminationSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExaminationSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExaminationSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ExaminationSessionGroupByOutputType[P]>
        }
      >
    >


  export type ExaminationSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    sessionName?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    examinations?: boolean | ExaminationSession$examinationsArgs<ExtArgs>
    _count?: boolean | ExaminationSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examinationSession"]>



  export type ExaminationSessionSelectScalar = {
    id?: boolean
    year?: boolean
    sessionName?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
  }

  export type ExaminationSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "sessionName" | "startDate" | "endDate" | "createdAt", ExtArgs["result"]["examinationSession"]>
  export type ExaminationSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examinations?: boolean | ExaminationSession$examinationsArgs<ExtArgs>
    _count?: boolean | ExaminationSessionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ExaminationSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExaminationSession"
    objects: {
      examinations: Prisma.$ExaminationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: number
      sessionName: string
      startDate: Date
      endDate: Date
      createdAt: Date
    }, ExtArgs["result"]["examinationSession"]>
    composites: {}
  }

  type ExaminationSessionGetPayload<S extends boolean | null | undefined | ExaminationSessionDefaultArgs> = $Result.GetResult<Prisma.$ExaminationSessionPayload, S>

  type ExaminationSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExaminationSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExaminationSessionCountAggregateInputType | true
    }

  export interface ExaminationSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExaminationSession'], meta: { name: 'ExaminationSession' } }
    /**
     * Find zero or one ExaminationSession that matches the filter.
     * @param {ExaminationSessionFindUniqueArgs} args - Arguments to find a ExaminationSession
     * @example
     * // Get one ExaminationSession
     * const examinationSession = await prisma.examinationSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExaminationSessionFindUniqueArgs>(args: SelectSubset<T, ExaminationSessionFindUniqueArgs<ExtArgs>>): Prisma__ExaminationSessionClient<$Result.GetResult<Prisma.$ExaminationSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExaminationSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExaminationSessionFindUniqueOrThrowArgs} args - Arguments to find a ExaminationSession
     * @example
     * // Get one ExaminationSession
     * const examinationSession = await prisma.examinationSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExaminationSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ExaminationSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExaminationSessionClient<$Result.GetResult<Prisma.$ExaminationSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExaminationSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationSessionFindFirstArgs} args - Arguments to find a ExaminationSession
     * @example
     * // Get one ExaminationSession
     * const examinationSession = await prisma.examinationSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExaminationSessionFindFirstArgs>(args?: SelectSubset<T, ExaminationSessionFindFirstArgs<ExtArgs>>): Prisma__ExaminationSessionClient<$Result.GetResult<Prisma.$ExaminationSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExaminationSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationSessionFindFirstOrThrowArgs} args - Arguments to find a ExaminationSession
     * @example
     * // Get one ExaminationSession
     * const examinationSession = await prisma.examinationSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExaminationSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ExaminationSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExaminationSessionClient<$Result.GetResult<Prisma.$ExaminationSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExaminationSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExaminationSessions
     * const examinationSessions = await prisma.examinationSession.findMany()
     * 
     * // Get first 10 ExaminationSessions
     * const examinationSessions = await prisma.examinationSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examinationSessionWithIdOnly = await prisma.examinationSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExaminationSessionFindManyArgs>(args?: SelectSubset<T, ExaminationSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExaminationSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExaminationSession.
     * @param {ExaminationSessionCreateArgs} args - Arguments to create a ExaminationSession.
     * @example
     * // Create one ExaminationSession
     * const ExaminationSession = await prisma.examinationSession.create({
     *   data: {
     *     // ... data to create a ExaminationSession
     *   }
     * })
     * 
     */
    create<T extends ExaminationSessionCreateArgs>(args: SelectSubset<T, ExaminationSessionCreateArgs<ExtArgs>>): Prisma__ExaminationSessionClient<$Result.GetResult<Prisma.$ExaminationSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExaminationSessions.
     * @param {ExaminationSessionCreateManyArgs} args - Arguments to create many ExaminationSessions.
     * @example
     * // Create many ExaminationSessions
     * const examinationSession = await prisma.examinationSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExaminationSessionCreateManyArgs>(args?: SelectSubset<T, ExaminationSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExaminationSession.
     * @param {ExaminationSessionDeleteArgs} args - Arguments to delete one ExaminationSession.
     * @example
     * // Delete one ExaminationSession
     * const ExaminationSession = await prisma.examinationSession.delete({
     *   where: {
     *     // ... filter to delete one ExaminationSession
     *   }
     * })
     * 
     */
    delete<T extends ExaminationSessionDeleteArgs>(args: SelectSubset<T, ExaminationSessionDeleteArgs<ExtArgs>>): Prisma__ExaminationSessionClient<$Result.GetResult<Prisma.$ExaminationSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExaminationSession.
     * @param {ExaminationSessionUpdateArgs} args - Arguments to update one ExaminationSession.
     * @example
     * // Update one ExaminationSession
     * const examinationSession = await prisma.examinationSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExaminationSessionUpdateArgs>(args: SelectSubset<T, ExaminationSessionUpdateArgs<ExtArgs>>): Prisma__ExaminationSessionClient<$Result.GetResult<Prisma.$ExaminationSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExaminationSessions.
     * @param {ExaminationSessionDeleteManyArgs} args - Arguments to filter ExaminationSessions to delete.
     * @example
     * // Delete a few ExaminationSessions
     * const { count } = await prisma.examinationSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExaminationSessionDeleteManyArgs>(args?: SelectSubset<T, ExaminationSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExaminationSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExaminationSessions
     * const examinationSession = await prisma.examinationSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExaminationSessionUpdateManyArgs>(args: SelectSubset<T, ExaminationSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExaminationSession.
     * @param {ExaminationSessionUpsertArgs} args - Arguments to update or create a ExaminationSession.
     * @example
     * // Update or create a ExaminationSession
     * const examinationSession = await prisma.examinationSession.upsert({
     *   create: {
     *     // ... data to create a ExaminationSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExaminationSession we want to update
     *   }
     * })
     */
    upsert<T extends ExaminationSessionUpsertArgs>(args: SelectSubset<T, ExaminationSessionUpsertArgs<ExtArgs>>): Prisma__ExaminationSessionClient<$Result.GetResult<Prisma.$ExaminationSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExaminationSessions that matches the filter.
     * @param {ExaminationSessionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const examinationSession = await prisma.examinationSession.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ExaminationSessionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ExaminationSession.
     * @param {ExaminationSessionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const examinationSession = await prisma.examinationSession.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ExaminationSessionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ExaminationSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationSessionCountArgs} args - Arguments to filter ExaminationSessions to count.
     * @example
     * // Count the number of ExaminationSessions
     * const count = await prisma.examinationSession.count({
     *   where: {
     *     // ... the filter for the ExaminationSessions we want to count
     *   }
     * })
    **/
    count<T extends ExaminationSessionCountArgs>(
      args?: Subset<T, ExaminationSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExaminationSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExaminationSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExaminationSessionAggregateArgs>(args: Subset<T, ExaminationSessionAggregateArgs>): Prisma.PrismaPromise<GetExaminationSessionAggregateType<T>>

    /**
     * Group by ExaminationSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationSessionGroupByArgs} args - Group by arguments.
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
      T extends ExaminationSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExaminationSessionGroupByArgs['orderBy'] }
        : { orderBy?: ExaminationSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExaminationSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExaminationSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExaminationSession model
   */
  readonly fields: ExaminationSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExaminationSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExaminationSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    examinations<T extends ExaminationSession$examinationsArgs<ExtArgs> = {}>(args?: Subset<T, ExaminationSession$examinationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ExaminationSession model
   */
  interface ExaminationSessionFieldRefs {
    readonly id: FieldRef<"ExaminationSession", 'String'>
    readonly year: FieldRef<"ExaminationSession", 'Int'>
    readonly sessionName: FieldRef<"ExaminationSession", 'String'>
    readonly startDate: FieldRef<"ExaminationSession", 'DateTime'>
    readonly endDate: FieldRef<"ExaminationSession", 'DateTime'>
    readonly createdAt: FieldRef<"ExaminationSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExaminationSession findUnique
   */
  export type ExaminationSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExaminationSession
     */
    select?: ExaminationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExaminationSession
     */
    omit?: ExaminationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationSessionInclude<ExtArgs> | null
    /**
     * Filter, which ExaminationSession to fetch.
     */
    where: ExaminationSessionWhereUniqueInput
  }

  /**
   * ExaminationSession findUniqueOrThrow
   */
  export type ExaminationSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExaminationSession
     */
    select?: ExaminationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExaminationSession
     */
    omit?: ExaminationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationSessionInclude<ExtArgs> | null
    /**
     * Filter, which ExaminationSession to fetch.
     */
    where: ExaminationSessionWhereUniqueInput
  }

  /**
   * ExaminationSession findFirst
   */
  export type ExaminationSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExaminationSession
     */
    select?: ExaminationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExaminationSession
     */
    omit?: ExaminationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationSessionInclude<ExtArgs> | null
    /**
     * Filter, which ExaminationSession to fetch.
     */
    where?: ExaminationSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExaminationSessions to fetch.
     */
    orderBy?: ExaminationSessionOrderByWithRelationInput | ExaminationSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExaminationSessions.
     */
    cursor?: ExaminationSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExaminationSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExaminationSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExaminationSessions.
     */
    distinct?: ExaminationSessionScalarFieldEnum | ExaminationSessionScalarFieldEnum[]
  }

  /**
   * ExaminationSession findFirstOrThrow
   */
  export type ExaminationSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExaminationSession
     */
    select?: ExaminationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExaminationSession
     */
    omit?: ExaminationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationSessionInclude<ExtArgs> | null
    /**
     * Filter, which ExaminationSession to fetch.
     */
    where?: ExaminationSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExaminationSessions to fetch.
     */
    orderBy?: ExaminationSessionOrderByWithRelationInput | ExaminationSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExaminationSessions.
     */
    cursor?: ExaminationSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExaminationSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExaminationSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExaminationSessions.
     */
    distinct?: ExaminationSessionScalarFieldEnum | ExaminationSessionScalarFieldEnum[]
  }

  /**
   * ExaminationSession findMany
   */
  export type ExaminationSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExaminationSession
     */
    select?: ExaminationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExaminationSession
     */
    omit?: ExaminationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationSessionInclude<ExtArgs> | null
    /**
     * Filter, which ExaminationSessions to fetch.
     */
    where?: ExaminationSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExaminationSessions to fetch.
     */
    orderBy?: ExaminationSessionOrderByWithRelationInput | ExaminationSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExaminationSessions.
     */
    cursor?: ExaminationSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExaminationSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExaminationSessions.
     */
    skip?: number
    distinct?: ExaminationSessionScalarFieldEnum | ExaminationSessionScalarFieldEnum[]
  }

  /**
   * ExaminationSession create
   */
  export type ExaminationSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExaminationSession
     */
    select?: ExaminationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExaminationSession
     */
    omit?: ExaminationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ExaminationSession.
     */
    data: XOR<ExaminationSessionCreateInput, ExaminationSessionUncheckedCreateInput>
  }

  /**
   * ExaminationSession createMany
   */
  export type ExaminationSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExaminationSessions.
     */
    data: ExaminationSessionCreateManyInput | ExaminationSessionCreateManyInput[]
  }

  /**
   * ExaminationSession update
   */
  export type ExaminationSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExaminationSession
     */
    select?: ExaminationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExaminationSession
     */
    omit?: ExaminationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ExaminationSession.
     */
    data: XOR<ExaminationSessionUpdateInput, ExaminationSessionUncheckedUpdateInput>
    /**
     * Choose, which ExaminationSession to update.
     */
    where: ExaminationSessionWhereUniqueInput
  }

  /**
   * ExaminationSession updateMany
   */
  export type ExaminationSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExaminationSessions.
     */
    data: XOR<ExaminationSessionUpdateManyMutationInput, ExaminationSessionUncheckedUpdateManyInput>
    /**
     * Filter which ExaminationSessions to update
     */
    where?: ExaminationSessionWhereInput
    /**
     * Limit how many ExaminationSessions to update.
     */
    limit?: number
  }

  /**
   * ExaminationSession upsert
   */
  export type ExaminationSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExaminationSession
     */
    select?: ExaminationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExaminationSession
     */
    omit?: ExaminationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ExaminationSession to update in case it exists.
     */
    where: ExaminationSessionWhereUniqueInput
    /**
     * In case the ExaminationSession found by the `where` argument doesn't exist, create a new ExaminationSession with this data.
     */
    create: XOR<ExaminationSessionCreateInput, ExaminationSessionUncheckedCreateInput>
    /**
     * In case the ExaminationSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExaminationSessionUpdateInput, ExaminationSessionUncheckedUpdateInput>
  }

  /**
   * ExaminationSession delete
   */
  export type ExaminationSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExaminationSession
     */
    select?: ExaminationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExaminationSession
     */
    omit?: ExaminationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationSessionInclude<ExtArgs> | null
    /**
     * Filter which ExaminationSession to delete.
     */
    where: ExaminationSessionWhereUniqueInput
  }

  /**
   * ExaminationSession deleteMany
   */
  export type ExaminationSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExaminationSessions to delete
     */
    where?: ExaminationSessionWhereInput
    /**
     * Limit how many ExaminationSessions to delete.
     */
    limit?: number
  }

  /**
   * ExaminationSession findRaw
   */
  export type ExaminationSessionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ExaminationSession aggregateRaw
   */
  export type ExaminationSessionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ExaminationSession.examinations
   */
  export type ExaminationSession$examinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    where?: ExaminationWhereInput
    orderBy?: ExaminationOrderByWithRelationInput | ExaminationOrderByWithRelationInput[]
    cursor?: ExaminationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExaminationScalarFieldEnum | ExaminationScalarFieldEnum[]
  }

  /**
   * ExaminationSession without action
   */
  export type ExaminationSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExaminationSession
     */
    select?: ExaminationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExaminationSession
     */
    omit?: ExaminationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationSessionInclude<ExtArgs> | null
  }


  /**
   * Model Examination
   */

  export type AggregateExamination = {
    _count: ExaminationCountAggregateOutputType | null
    _min: ExaminationMinAggregateOutputType | null
    _max: ExaminationMaxAggregateOutputType | null
  }

  export type ExaminationMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    sessionId: string | null
    date: Date | null
  }

  export type ExaminationMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    sessionId: string | null
    date: Date | null
  }

  export type ExaminationCountAggregateOutputType = {
    id: number
    studentId: number
    sessionId: number
    date: number
    _all: number
  }


  export type ExaminationMinAggregateInputType = {
    id?: true
    studentId?: true
    sessionId?: true
    date?: true
  }

  export type ExaminationMaxAggregateInputType = {
    id?: true
    studentId?: true
    sessionId?: true
    date?: true
  }

  export type ExaminationCountAggregateInputType = {
    id?: true
    studentId?: true
    sessionId?: true
    date?: true
    _all?: true
  }

  export type ExaminationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Examination to aggregate.
     */
    where?: ExaminationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examinations to fetch.
     */
    orderBy?: ExaminationOrderByWithRelationInput | ExaminationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExaminationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Examinations
    **/
    _count?: true | ExaminationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExaminationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExaminationMaxAggregateInputType
  }

  export type GetExaminationAggregateType<T extends ExaminationAggregateArgs> = {
        [P in keyof T & keyof AggregateExamination]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamination[P]>
      : GetScalarType<T[P], AggregateExamination[P]>
  }




  export type ExaminationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExaminationWhereInput
    orderBy?: ExaminationOrderByWithAggregationInput | ExaminationOrderByWithAggregationInput[]
    by: ExaminationScalarFieldEnum[] | ExaminationScalarFieldEnum
    having?: ExaminationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExaminationCountAggregateInputType | true
    _min?: ExaminationMinAggregateInputType
    _max?: ExaminationMaxAggregateInputType
  }

  export type ExaminationGroupByOutputType = {
    id: string
    studentId: string
    sessionId: string
    date: Date
    _count: ExaminationCountAggregateOutputType | null
    _min: ExaminationMinAggregateOutputType | null
    _max: ExaminationMaxAggregateOutputType | null
  }

  type GetExaminationGroupByPayload<T extends ExaminationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExaminationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExaminationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExaminationGroupByOutputType[P]>
            : GetScalarType<T[P], ExaminationGroupByOutputType[P]>
        }
      >
    >


  export type ExaminationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    sessionId?: boolean
    date?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    session?: boolean | ExaminationSessionDefaultArgs<ExtArgs>
    diagnoses?: boolean | Examination$diagnosesArgs<ExtArgs>
    _count?: boolean | ExaminationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examination"]>



  export type ExaminationSelectScalar = {
    id?: boolean
    studentId?: boolean
    sessionId?: boolean
    date?: boolean
  }

  export type ExaminationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "sessionId" | "date", ExtArgs["result"]["examination"]>
  export type ExaminationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    session?: boolean | ExaminationSessionDefaultArgs<ExtArgs>
    diagnoses?: boolean | Examination$diagnosesArgs<ExtArgs>
    _count?: boolean | ExaminationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ExaminationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Examination"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      session: Prisma.$ExaminationSessionPayload<ExtArgs>
      diagnoses: Prisma.$DiagnosisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      sessionId: string
      date: Date
    }, ExtArgs["result"]["examination"]>
    composites: {}
  }

  type ExaminationGetPayload<S extends boolean | null | undefined | ExaminationDefaultArgs> = $Result.GetResult<Prisma.$ExaminationPayload, S>

  type ExaminationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExaminationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExaminationCountAggregateInputType | true
    }

  export interface ExaminationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Examination'], meta: { name: 'Examination' } }
    /**
     * Find zero or one Examination that matches the filter.
     * @param {ExaminationFindUniqueArgs} args - Arguments to find a Examination
     * @example
     * // Get one Examination
     * const examination = await prisma.examination.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExaminationFindUniqueArgs>(args: SelectSubset<T, ExaminationFindUniqueArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Examination that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExaminationFindUniqueOrThrowArgs} args - Arguments to find a Examination
     * @example
     * // Get one Examination
     * const examination = await prisma.examination.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExaminationFindUniqueOrThrowArgs>(args: SelectSubset<T, ExaminationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Examination that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationFindFirstArgs} args - Arguments to find a Examination
     * @example
     * // Get one Examination
     * const examination = await prisma.examination.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExaminationFindFirstArgs>(args?: SelectSubset<T, ExaminationFindFirstArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Examination that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationFindFirstOrThrowArgs} args - Arguments to find a Examination
     * @example
     * // Get one Examination
     * const examination = await prisma.examination.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExaminationFindFirstOrThrowArgs>(args?: SelectSubset<T, ExaminationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Examinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Examinations
     * const examinations = await prisma.examination.findMany()
     * 
     * // Get first 10 Examinations
     * const examinations = await prisma.examination.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examinationWithIdOnly = await prisma.examination.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExaminationFindManyArgs>(args?: SelectSubset<T, ExaminationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Examination.
     * @param {ExaminationCreateArgs} args - Arguments to create a Examination.
     * @example
     * // Create one Examination
     * const Examination = await prisma.examination.create({
     *   data: {
     *     // ... data to create a Examination
     *   }
     * })
     * 
     */
    create<T extends ExaminationCreateArgs>(args: SelectSubset<T, ExaminationCreateArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Examinations.
     * @param {ExaminationCreateManyArgs} args - Arguments to create many Examinations.
     * @example
     * // Create many Examinations
     * const examination = await prisma.examination.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExaminationCreateManyArgs>(args?: SelectSubset<T, ExaminationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Examination.
     * @param {ExaminationDeleteArgs} args - Arguments to delete one Examination.
     * @example
     * // Delete one Examination
     * const Examination = await prisma.examination.delete({
     *   where: {
     *     // ... filter to delete one Examination
     *   }
     * })
     * 
     */
    delete<T extends ExaminationDeleteArgs>(args: SelectSubset<T, ExaminationDeleteArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Examination.
     * @param {ExaminationUpdateArgs} args - Arguments to update one Examination.
     * @example
     * // Update one Examination
     * const examination = await prisma.examination.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExaminationUpdateArgs>(args: SelectSubset<T, ExaminationUpdateArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Examinations.
     * @param {ExaminationDeleteManyArgs} args - Arguments to filter Examinations to delete.
     * @example
     * // Delete a few Examinations
     * const { count } = await prisma.examination.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExaminationDeleteManyArgs>(args?: SelectSubset<T, ExaminationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Examinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Examinations
     * const examination = await prisma.examination.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExaminationUpdateManyArgs>(args: SelectSubset<T, ExaminationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Examination.
     * @param {ExaminationUpsertArgs} args - Arguments to update or create a Examination.
     * @example
     * // Update or create a Examination
     * const examination = await prisma.examination.upsert({
     *   create: {
     *     // ... data to create a Examination
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Examination we want to update
     *   }
     * })
     */
    upsert<T extends ExaminationUpsertArgs>(args: SelectSubset<T, ExaminationUpsertArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Examinations that matches the filter.
     * @param {ExaminationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const examination = await prisma.examination.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ExaminationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Examination.
     * @param {ExaminationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const examination = await prisma.examination.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ExaminationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Examinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationCountArgs} args - Arguments to filter Examinations to count.
     * @example
     * // Count the number of Examinations
     * const count = await prisma.examination.count({
     *   where: {
     *     // ... the filter for the Examinations we want to count
     *   }
     * })
    **/
    count<T extends ExaminationCountArgs>(
      args?: Subset<T, ExaminationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExaminationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Examination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExaminationAggregateArgs>(args: Subset<T, ExaminationAggregateArgs>): Prisma.PrismaPromise<GetExaminationAggregateType<T>>

    /**
     * Group by Examination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExaminationGroupByArgs} args - Group by arguments.
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
      T extends ExaminationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExaminationGroupByArgs['orderBy'] }
        : { orderBy?: ExaminationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExaminationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExaminationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Examination model
   */
  readonly fields: ExaminationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Examination.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExaminationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    session<T extends ExaminationSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExaminationSessionDefaultArgs<ExtArgs>>): Prisma__ExaminationSessionClient<$Result.GetResult<Prisma.$ExaminationSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    diagnoses<T extends Examination$diagnosesArgs<ExtArgs> = {}>(args?: Subset<T, Examination$diagnosesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Examination model
   */
  interface ExaminationFieldRefs {
    readonly id: FieldRef<"Examination", 'String'>
    readonly studentId: FieldRef<"Examination", 'String'>
    readonly sessionId: FieldRef<"Examination", 'String'>
    readonly date: FieldRef<"Examination", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Examination findUnique
   */
  export type ExaminationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * Filter, which Examination to fetch.
     */
    where: ExaminationWhereUniqueInput
  }

  /**
   * Examination findUniqueOrThrow
   */
  export type ExaminationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * Filter, which Examination to fetch.
     */
    where: ExaminationWhereUniqueInput
  }

  /**
   * Examination findFirst
   */
  export type ExaminationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * Filter, which Examination to fetch.
     */
    where?: ExaminationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examinations to fetch.
     */
    orderBy?: ExaminationOrderByWithRelationInput | ExaminationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Examinations.
     */
    cursor?: ExaminationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Examinations.
     */
    distinct?: ExaminationScalarFieldEnum | ExaminationScalarFieldEnum[]
  }

  /**
   * Examination findFirstOrThrow
   */
  export type ExaminationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * Filter, which Examination to fetch.
     */
    where?: ExaminationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examinations to fetch.
     */
    orderBy?: ExaminationOrderByWithRelationInput | ExaminationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Examinations.
     */
    cursor?: ExaminationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Examinations.
     */
    distinct?: ExaminationScalarFieldEnum | ExaminationScalarFieldEnum[]
  }

  /**
   * Examination findMany
   */
  export type ExaminationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * Filter, which Examinations to fetch.
     */
    where?: ExaminationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examinations to fetch.
     */
    orderBy?: ExaminationOrderByWithRelationInput | ExaminationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Examinations.
     */
    cursor?: ExaminationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examinations.
     */
    skip?: number
    distinct?: ExaminationScalarFieldEnum | ExaminationScalarFieldEnum[]
  }

  /**
   * Examination create
   */
  export type ExaminationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * The data needed to create a Examination.
     */
    data: XOR<ExaminationCreateInput, ExaminationUncheckedCreateInput>
  }

  /**
   * Examination createMany
   */
  export type ExaminationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Examinations.
     */
    data: ExaminationCreateManyInput | ExaminationCreateManyInput[]
  }

  /**
   * Examination update
   */
  export type ExaminationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * The data needed to update a Examination.
     */
    data: XOR<ExaminationUpdateInput, ExaminationUncheckedUpdateInput>
    /**
     * Choose, which Examination to update.
     */
    where: ExaminationWhereUniqueInput
  }

  /**
   * Examination updateMany
   */
  export type ExaminationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Examinations.
     */
    data: XOR<ExaminationUpdateManyMutationInput, ExaminationUncheckedUpdateManyInput>
    /**
     * Filter which Examinations to update
     */
    where?: ExaminationWhereInput
    /**
     * Limit how many Examinations to update.
     */
    limit?: number
  }

  /**
   * Examination upsert
   */
  export type ExaminationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * The filter to search for the Examination to update in case it exists.
     */
    where: ExaminationWhereUniqueInput
    /**
     * In case the Examination found by the `where` argument doesn't exist, create a new Examination with this data.
     */
    create: XOR<ExaminationCreateInput, ExaminationUncheckedCreateInput>
    /**
     * In case the Examination was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExaminationUpdateInput, ExaminationUncheckedUpdateInput>
  }

  /**
   * Examination delete
   */
  export type ExaminationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
    /**
     * Filter which Examination to delete.
     */
    where: ExaminationWhereUniqueInput
  }

  /**
   * Examination deleteMany
   */
  export type ExaminationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Examinations to delete
     */
    where?: ExaminationWhereInput
    /**
     * Limit how many Examinations to delete.
     */
    limit?: number
  }

  /**
   * Examination findRaw
   */
  export type ExaminationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Examination aggregateRaw
   */
  export type ExaminationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Examination.diagnoses
   */
  export type Examination$diagnosesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    where?: DiagnosisWhereInput
    orderBy?: DiagnosisOrderByWithRelationInput | DiagnosisOrderByWithRelationInput[]
    cursor?: DiagnosisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosisScalarFieldEnum | DiagnosisScalarFieldEnum[]
  }

  /**
   * Examination without action
   */
  export type ExaminationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Examination
     */
    select?: ExaminationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Examination
     */
    omit?: ExaminationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExaminationInclude<ExtArgs> | null
  }


  /**
   * Model DiagnosisCategory
   */

  export type AggregateDiagnosisCategory = {
    _count: DiagnosisCategoryCountAggregateOutputType | null
    _min: DiagnosisCategoryMinAggregateOutputType | null
    _max: DiagnosisCategoryMaxAggregateOutputType | null
  }

  export type DiagnosisCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DiagnosisCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DiagnosisCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DiagnosisCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DiagnosisCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DiagnosisCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DiagnosisCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiagnosisCategory to aggregate.
     */
    where?: DiagnosisCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosisCategories to fetch.
     */
    orderBy?: DiagnosisCategoryOrderByWithRelationInput | DiagnosisCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiagnosisCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosisCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosisCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiagnosisCategories
    **/
    _count?: true | DiagnosisCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosisCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosisCategoryMaxAggregateInputType
  }

  export type GetDiagnosisCategoryAggregateType<T extends DiagnosisCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnosisCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnosisCategory[P]>
      : GetScalarType<T[P], AggregateDiagnosisCategory[P]>
  }




  export type DiagnosisCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosisCategoryWhereInput
    orderBy?: DiagnosisCategoryOrderByWithAggregationInput | DiagnosisCategoryOrderByWithAggregationInput[]
    by: DiagnosisCategoryScalarFieldEnum[] | DiagnosisCategoryScalarFieldEnum
    having?: DiagnosisCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosisCategoryCountAggregateInputType | true
    _min?: DiagnosisCategoryMinAggregateInputType
    _max?: DiagnosisCategoryMaxAggregateInputType
  }

  export type DiagnosisCategoryGroupByOutputType = {
    id: string
    name: string
    _count: DiagnosisCategoryCountAggregateOutputType | null
    _min: DiagnosisCategoryMinAggregateOutputType | null
    _max: DiagnosisCategoryMaxAggregateOutputType | null
  }

  type GetDiagnosisCategoryGroupByPayload<T extends DiagnosisCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosisCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosisCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosisCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosisCategoryGroupByOutputType[P]>
        }
      >
    >


  export type DiagnosisCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    diseases?: boolean | DiagnosisCategory$diseasesArgs<ExtArgs>
    _count?: boolean | DiagnosisCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosisCategory"]>



  export type DiagnosisCategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type DiagnosisCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["diagnosisCategory"]>
  export type DiagnosisCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diseases?: boolean | DiagnosisCategory$diseasesArgs<ExtArgs>
    _count?: boolean | DiagnosisCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DiagnosisCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiagnosisCategory"
    objects: {
      diseases: Prisma.$DiseasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["diagnosisCategory"]>
    composites: {}
  }

  type DiagnosisCategoryGetPayload<S extends boolean | null | undefined | DiagnosisCategoryDefaultArgs> = $Result.GetResult<Prisma.$DiagnosisCategoryPayload, S>

  type DiagnosisCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiagnosisCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnosisCategoryCountAggregateInputType | true
    }

  export interface DiagnosisCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiagnosisCategory'], meta: { name: 'DiagnosisCategory' } }
    /**
     * Find zero or one DiagnosisCategory that matches the filter.
     * @param {DiagnosisCategoryFindUniqueArgs} args - Arguments to find a DiagnosisCategory
     * @example
     * // Get one DiagnosisCategory
     * const diagnosisCategory = await prisma.diagnosisCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiagnosisCategoryFindUniqueArgs>(args: SelectSubset<T, DiagnosisCategoryFindUniqueArgs<ExtArgs>>): Prisma__DiagnosisCategoryClient<$Result.GetResult<Prisma.$DiagnosisCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiagnosisCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiagnosisCategoryFindUniqueOrThrowArgs} args - Arguments to find a DiagnosisCategory
     * @example
     * // Get one DiagnosisCategory
     * const diagnosisCategory = await prisma.diagnosisCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiagnosisCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, DiagnosisCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiagnosisCategoryClient<$Result.GetResult<Prisma.$DiagnosisCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiagnosisCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisCategoryFindFirstArgs} args - Arguments to find a DiagnosisCategory
     * @example
     * // Get one DiagnosisCategory
     * const diagnosisCategory = await prisma.diagnosisCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiagnosisCategoryFindFirstArgs>(args?: SelectSubset<T, DiagnosisCategoryFindFirstArgs<ExtArgs>>): Prisma__DiagnosisCategoryClient<$Result.GetResult<Prisma.$DiagnosisCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiagnosisCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisCategoryFindFirstOrThrowArgs} args - Arguments to find a DiagnosisCategory
     * @example
     * // Get one DiagnosisCategory
     * const diagnosisCategory = await prisma.diagnosisCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiagnosisCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, DiagnosisCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiagnosisCategoryClient<$Result.GetResult<Prisma.$DiagnosisCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiagnosisCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiagnosisCategories
     * const diagnosisCategories = await prisma.diagnosisCategory.findMany()
     * 
     * // Get first 10 DiagnosisCategories
     * const diagnosisCategories = await prisma.diagnosisCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diagnosisCategoryWithIdOnly = await prisma.diagnosisCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiagnosisCategoryFindManyArgs>(args?: SelectSubset<T, DiagnosisCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosisCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiagnosisCategory.
     * @param {DiagnosisCategoryCreateArgs} args - Arguments to create a DiagnosisCategory.
     * @example
     * // Create one DiagnosisCategory
     * const DiagnosisCategory = await prisma.diagnosisCategory.create({
     *   data: {
     *     // ... data to create a DiagnosisCategory
     *   }
     * })
     * 
     */
    create<T extends DiagnosisCategoryCreateArgs>(args: SelectSubset<T, DiagnosisCategoryCreateArgs<ExtArgs>>): Prisma__DiagnosisCategoryClient<$Result.GetResult<Prisma.$DiagnosisCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiagnosisCategories.
     * @param {DiagnosisCategoryCreateManyArgs} args - Arguments to create many DiagnosisCategories.
     * @example
     * // Create many DiagnosisCategories
     * const diagnosisCategory = await prisma.diagnosisCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiagnosisCategoryCreateManyArgs>(args?: SelectSubset<T, DiagnosisCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DiagnosisCategory.
     * @param {DiagnosisCategoryDeleteArgs} args - Arguments to delete one DiagnosisCategory.
     * @example
     * // Delete one DiagnosisCategory
     * const DiagnosisCategory = await prisma.diagnosisCategory.delete({
     *   where: {
     *     // ... filter to delete one DiagnosisCategory
     *   }
     * })
     * 
     */
    delete<T extends DiagnosisCategoryDeleteArgs>(args: SelectSubset<T, DiagnosisCategoryDeleteArgs<ExtArgs>>): Prisma__DiagnosisCategoryClient<$Result.GetResult<Prisma.$DiagnosisCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiagnosisCategory.
     * @param {DiagnosisCategoryUpdateArgs} args - Arguments to update one DiagnosisCategory.
     * @example
     * // Update one DiagnosisCategory
     * const diagnosisCategory = await prisma.diagnosisCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiagnosisCategoryUpdateArgs>(args: SelectSubset<T, DiagnosisCategoryUpdateArgs<ExtArgs>>): Prisma__DiagnosisCategoryClient<$Result.GetResult<Prisma.$DiagnosisCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiagnosisCategories.
     * @param {DiagnosisCategoryDeleteManyArgs} args - Arguments to filter DiagnosisCategories to delete.
     * @example
     * // Delete a few DiagnosisCategories
     * const { count } = await prisma.diagnosisCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiagnosisCategoryDeleteManyArgs>(args?: SelectSubset<T, DiagnosisCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiagnosisCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiagnosisCategories
     * const diagnosisCategory = await prisma.diagnosisCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiagnosisCategoryUpdateManyArgs>(args: SelectSubset<T, DiagnosisCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DiagnosisCategory.
     * @param {DiagnosisCategoryUpsertArgs} args - Arguments to update or create a DiagnosisCategory.
     * @example
     * // Update or create a DiagnosisCategory
     * const diagnosisCategory = await prisma.diagnosisCategory.upsert({
     *   create: {
     *     // ... data to create a DiagnosisCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiagnosisCategory we want to update
     *   }
     * })
     */
    upsert<T extends DiagnosisCategoryUpsertArgs>(args: SelectSubset<T, DiagnosisCategoryUpsertArgs<ExtArgs>>): Prisma__DiagnosisCategoryClient<$Result.GetResult<Prisma.$DiagnosisCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiagnosisCategories that matches the filter.
     * @param {DiagnosisCategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const diagnosisCategory = await prisma.diagnosisCategory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DiagnosisCategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DiagnosisCategory.
     * @param {DiagnosisCategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const diagnosisCategory = await prisma.diagnosisCategory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DiagnosisCategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of DiagnosisCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisCategoryCountArgs} args - Arguments to filter DiagnosisCategories to count.
     * @example
     * // Count the number of DiagnosisCategories
     * const count = await prisma.diagnosisCategory.count({
     *   where: {
     *     // ... the filter for the DiagnosisCategories we want to count
     *   }
     * })
    **/
    count<T extends DiagnosisCategoryCountArgs>(
      args?: Subset<T, DiagnosisCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosisCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiagnosisCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiagnosisCategoryAggregateArgs>(args: Subset<T, DiagnosisCategoryAggregateArgs>): Prisma.PrismaPromise<GetDiagnosisCategoryAggregateType<T>>

    /**
     * Group by DiagnosisCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisCategoryGroupByArgs} args - Group by arguments.
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
      T extends DiagnosisCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiagnosisCategoryGroupByArgs['orderBy'] }
        : { orderBy?: DiagnosisCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiagnosisCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosisCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiagnosisCategory model
   */
  readonly fields: DiagnosisCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiagnosisCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiagnosisCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diseases<T extends DiagnosisCategory$diseasesArgs<ExtArgs> = {}>(args?: Subset<T, DiagnosisCategory$diseasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DiagnosisCategory model
   */
  interface DiagnosisCategoryFieldRefs {
    readonly id: FieldRef<"DiagnosisCategory", 'String'>
    readonly name: FieldRef<"DiagnosisCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DiagnosisCategory findUnique
   */
  export type DiagnosisCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosisCategory
     */
    select?: DiagnosisCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosisCategory
     */
    omit?: DiagnosisCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosisCategory to fetch.
     */
    where: DiagnosisCategoryWhereUniqueInput
  }

  /**
   * DiagnosisCategory findUniqueOrThrow
   */
  export type DiagnosisCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosisCategory
     */
    select?: DiagnosisCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosisCategory
     */
    omit?: DiagnosisCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosisCategory to fetch.
     */
    where: DiagnosisCategoryWhereUniqueInput
  }

  /**
   * DiagnosisCategory findFirst
   */
  export type DiagnosisCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosisCategory
     */
    select?: DiagnosisCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosisCategory
     */
    omit?: DiagnosisCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosisCategory to fetch.
     */
    where?: DiagnosisCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosisCategories to fetch.
     */
    orderBy?: DiagnosisCategoryOrderByWithRelationInput | DiagnosisCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiagnosisCategories.
     */
    cursor?: DiagnosisCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosisCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosisCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiagnosisCategories.
     */
    distinct?: DiagnosisCategoryScalarFieldEnum | DiagnosisCategoryScalarFieldEnum[]
  }

  /**
   * DiagnosisCategory findFirstOrThrow
   */
  export type DiagnosisCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosisCategory
     */
    select?: DiagnosisCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosisCategory
     */
    omit?: DiagnosisCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosisCategory to fetch.
     */
    where?: DiagnosisCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosisCategories to fetch.
     */
    orderBy?: DiagnosisCategoryOrderByWithRelationInput | DiagnosisCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiagnosisCategories.
     */
    cursor?: DiagnosisCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosisCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosisCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiagnosisCategories.
     */
    distinct?: DiagnosisCategoryScalarFieldEnum | DiagnosisCategoryScalarFieldEnum[]
  }

  /**
   * DiagnosisCategory findMany
   */
  export type DiagnosisCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosisCategory
     */
    select?: DiagnosisCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosisCategory
     */
    omit?: DiagnosisCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosisCategories to fetch.
     */
    where?: DiagnosisCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosisCategories to fetch.
     */
    orderBy?: DiagnosisCategoryOrderByWithRelationInput | DiagnosisCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiagnosisCategories.
     */
    cursor?: DiagnosisCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosisCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosisCategories.
     */
    skip?: number
    distinct?: DiagnosisCategoryScalarFieldEnum | DiagnosisCategoryScalarFieldEnum[]
  }

  /**
   * DiagnosisCategory create
   */
  export type DiagnosisCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosisCategory
     */
    select?: DiagnosisCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosisCategory
     */
    omit?: DiagnosisCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a DiagnosisCategory.
     */
    data: XOR<DiagnosisCategoryCreateInput, DiagnosisCategoryUncheckedCreateInput>
  }

  /**
   * DiagnosisCategory createMany
   */
  export type DiagnosisCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiagnosisCategories.
     */
    data: DiagnosisCategoryCreateManyInput | DiagnosisCategoryCreateManyInput[]
  }

  /**
   * DiagnosisCategory update
   */
  export type DiagnosisCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosisCategory
     */
    select?: DiagnosisCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosisCategory
     */
    omit?: DiagnosisCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a DiagnosisCategory.
     */
    data: XOR<DiagnosisCategoryUpdateInput, DiagnosisCategoryUncheckedUpdateInput>
    /**
     * Choose, which DiagnosisCategory to update.
     */
    where: DiagnosisCategoryWhereUniqueInput
  }

  /**
   * DiagnosisCategory updateMany
   */
  export type DiagnosisCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiagnosisCategories.
     */
    data: XOR<DiagnosisCategoryUpdateManyMutationInput, DiagnosisCategoryUncheckedUpdateManyInput>
    /**
     * Filter which DiagnosisCategories to update
     */
    where?: DiagnosisCategoryWhereInput
    /**
     * Limit how many DiagnosisCategories to update.
     */
    limit?: number
  }

  /**
   * DiagnosisCategory upsert
   */
  export type DiagnosisCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosisCategory
     */
    select?: DiagnosisCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosisCategory
     */
    omit?: DiagnosisCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the DiagnosisCategory to update in case it exists.
     */
    where: DiagnosisCategoryWhereUniqueInput
    /**
     * In case the DiagnosisCategory found by the `where` argument doesn't exist, create a new DiagnosisCategory with this data.
     */
    create: XOR<DiagnosisCategoryCreateInput, DiagnosisCategoryUncheckedCreateInput>
    /**
     * In case the DiagnosisCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiagnosisCategoryUpdateInput, DiagnosisCategoryUncheckedUpdateInput>
  }

  /**
   * DiagnosisCategory delete
   */
  export type DiagnosisCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosisCategory
     */
    select?: DiagnosisCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosisCategory
     */
    omit?: DiagnosisCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisCategoryInclude<ExtArgs> | null
    /**
     * Filter which DiagnosisCategory to delete.
     */
    where: DiagnosisCategoryWhereUniqueInput
  }

  /**
   * DiagnosisCategory deleteMany
   */
  export type DiagnosisCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiagnosisCategories to delete
     */
    where?: DiagnosisCategoryWhereInput
    /**
     * Limit how many DiagnosisCategories to delete.
     */
    limit?: number
  }

  /**
   * DiagnosisCategory findRaw
   */
  export type DiagnosisCategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DiagnosisCategory aggregateRaw
   */
  export type DiagnosisCategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DiagnosisCategory.diseases
   */
  export type DiagnosisCategory$diseasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    where?: DiseaseWhereInput
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    cursor?: DiseaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiseaseScalarFieldEnum | DiseaseScalarFieldEnum[]
  }

  /**
   * DiagnosisCategory without action
   */
  export type DiagnosisCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosisCategory
     */
    select?: DiagnosisCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosisCategory
     */
    omit?: DiagnosisCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Disease
   */

  export type AggregateDisease = {
    _count: DiseaseCountAggregateOutputType | null
    _min: DiseaseMinAggregateOutputType | null
    _max: DiseaseMaxAggregateOutputType | null
  }

  export type DiseaseMinAggregateOutputType = {
    id: string | null
    name: string | null
    diagnosisCategoryId: string | null
  }

  export type DiseaseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    diagnosisCategoryId: string | null
  }

  export type DiseaseCountAggregateOutputType = {
    id: number
    name: number
    diagnosisCategoryId: number
    _all: number
  }


  export type DiseaseMinAggregateInputType = {
    id?: true
    name?: true
    diagnosisCategoryId?: true
  }

  export type DiseaseMaxAggregateInputType = {
    id?: true
    name?: true
    diagnosisCategoryId?: true
  }

  export type DiseaseCountAggregateInputType = {
    id?: true
    name?: true
    diagnosisCategoryId?: true
    _all?: true
  }

  export type DiseaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disease to aggregate.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diseases
    **/
    _count?: true | DiseaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiseaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiseaseMaxAggregateInputType
  }

  export type GetDiseaseAggregateType<T extends DiseaseAggregateArgs> = {
        [P in keyof T & keyof AggregateDisease]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisease[P]>
      : GetScalarType<T[P], AggregateDisease[P]>
  }




  export type DiseaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiseaseWhereInput
    orderBy?: DiseaseOrderByWithAggregationInput | DiseaseOrderByWithAggregationInput[]
    by: DiseaseScalarFieldEnum[] | DiseaseScalarFieldEnum
    having?: DiseaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiseaseCountAggregateInputType | true
    _min?: DiseaseMinAggregateInputType
    _max?: DiseaseMaxAggregateInputType
  }

  export type DiseaseGroupByOutputType = {
    id: string
    name: string
    diagnosisCategoryId: string
    _count: DiseaseCountAggregateOutputType | null
    _min: DiseaseMinAggregateOutputType | null
    _max: DiseaseMaxAggregateOutputType | null
  }

  type GetDiseaseGroupByPayload<T extends DiseaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiseaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiseaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiseaseGroupByOutputType[P]>
            : GetScalarType<T[P], DiseaseGroupByOutputType[P]>
        }
      >
    >


  export type DiseaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    diagnosisCategoryId?: boolean
    diagnosisCategory?: boolean | DiagnosisCategoryDefaultArgs<ExtArgs>
    diagnoses?: boolean | Disease$diagnosesArgs<ExtArgs>
    _count?: boolean | DiseaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disease"]>



  export type DiseaseSelectScalar = {
    id?: boolean
    name?: boolean
    diagnosisCategoryId?: boolean
  }

  export type DiseaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "diagnosisCategoryId", ExtArgs["result"]["disease"]>
  export type DiseaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosisCategory?: boolean | DiagnosisCategoryDefaultArgs<ExtArgs>
    diagnoses?: boolean | Disease$diagnosesArgs<ExtArgs>
    _count?: boolean | DiseaseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DiseasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disease"
    objects: {
      diagnosisCategory: Prisma.$DiagnosisCategoryPayload<ExtArgs>
      diagnoses: Prisma.$DiagnosisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      diagnosisCategoryId: string
    }, ExtArgs["result"]["disease"]>
    composites: {}
  }

  type DiseaseGetPayload<S extends boolean | null | undefined | DiseaseDefaultArgs> = $Result.GetResult<Prisma.$DiseasePayload, S>

  type DiseaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiseaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiseaseCountAggregateInputType | true
    }

  export interface DiseaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disease'], meta: { name: 'Disease' } }
    /**
     * Find zero or one Disease that matches the filter.
     * @param {DiseaseFindUniqueArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiseaseFindUniqueArgs>(args: SelectSubset<T, DiseaseFindUniqueArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disease that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiseaseFindUniqueOrThrowArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiseaseFindUniqueOrThrowArgs>(args: SelectSubset<T, DiseaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disease that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseFindFirstArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiseaseFindFirstArgs>(args?: SelectSubset<T, DiseaseFindFirstArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disease that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseFindFirstOrThrowArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiseaseFindFirstOrThrowArgs>(args?: SelectSubset<T, DiseaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diseases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diseases
     * const diseases = await prisma.disease.findMany()
     * 
     * // Get first 10 Diseases
     * const diseases = await prisma.disease.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diseaseWithIdOnly = await prisma.disease.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiseaseFindManyArgs>(args?: SelectSubset<T, DiseaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disease.
     * @param {DiseaseCreateArgs} args - Arguments to create a Disease.
     * @example
     * // Create one Disease
     * const Disease = await prisma.disease.create({
     *   data: {
     *     // ... data to create a Disease
     *   }
     * })
     * 
     */
    create<T extends DiseaseCreateArgs>(args: SelectSubset<T, DiseaseCreateArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diseases.
     * @param {DiseaseCreateManyArgs} args - Arguments to create many Diseases.
     * @example
     * // Create many Diseases
     * const disease = await prisma.disease.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiseaseCreateManyArgs>(args?: SelectSubset<T, DiseaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Disease.
     * @param {DiseaseDeleteArgs} args - Arguments to delete one Disease.
     * @example
     * // Delete one Disease
     * const Disease = await prisma.disease.delete({
     *   where: {
     *     // ... filter to delete one Disease
     *   }
     * })
     * 
     */
    delete<T extends DiseaseDeleteArgs>(args: SelectSubset<T, DiseaseDeleteArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disease.
     * @param {DiseaseUpdateArgs} args - Arguments to update one Disease.
     * @example
     * // Update one Disease
     * const disease = await prisma.disease.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiseaseUpdateArgs>(args: SelectSubset<T, DiseaseUpdateArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diseases.
     * @param {DiseaseDeleteManyArgs} args - Arguments to filter Diseases to delete.
     * @example
     * // Delete a few Diseases
     * const { count } = await prisma.disease.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiseaseDeleteManyArgs>(args?: SelectSubset<T, DiseaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diseases
     * const disease = await prisma.disease.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiseaseUpdateManyArgs>(args: SelectSubset<T, DiseaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Disease.
     * @param {DiseaseUpsertArgs} args - Arguments to update or create a Disease.
     * @example
     * // Update or create a Disease
     * const disease = await prisma.disease.upsert({
     *   create: {
     *     // ... data to create a Disease
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disease we want to update
     *   }
     * })
     */
    upsert<T extends DiseaseUpsertArgs>(args: SelectSubset<T, DiseaseUpsertArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diseases that matches the filter.
     * @param {DiseaseFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const disease = await prisma.disease.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DiseaseFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Disease.
     * @param {DiseaseAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const disease = await prisma.disease.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DiseaseAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Diseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseCountArgs} args - Arguments to filter Diseases to count.
     * @example
     * // Count the number of Diseases
     * const count = await prisma.disease.count({
     *   where: {
     *     // ... the filter for the Diseases we want to count
     *   }
     * })
    **/
    count<T extends DiseaseCountArgs>(
      args?: Subset<T, DiseaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiseaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiseaseAggregateArgs>(args: Subset<T, DiseaseAggregateArgs>): Prisma.PrismaPromise<GetDiseaseAggregateType<T>>

    /**
     * Group by Disease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseGroupByArgs} args - Group by arguments.
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
      T extends DiseaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiseaseGroupByArgs['orderBy'] }
        : { orderBy?: DiseaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiseaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiseaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disease model
   */
  readonly fields: DiseaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disease.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiseaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diagnosisCategory<T extends DiagnosisCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiagnosisCategoryDefaultArgs<ExtArgs>>): Prisma__DiagnosisCategoryClient<$Result.GetResult<Prisma.$DiagnosisCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    diagnoses<T extends Disease$diagnosesArgs<ExtArgs> = {}>(args?: Subset<T, Disease$diagnosesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Disease model
   */
  interface DiseaseFieldRefs {
    readonly id: FieldRef<"Disease", 'String'>
    readonly name: FieldRef<"Disease", 'String'>
    readonly diagnosisCategoryId: FieldRef<"Disease", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Disease findUnique
   */
  export type DiseaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease findUniqueOrThrow
   */
  export type DiseaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease findFirst
   */
  export type DiseaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diseases.
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diseases.
     */
    distinct?: DiseaseScalarFieldEnum | DiseaseScalarFieldEnum[]
  }

  /**
   * Disease findFirstOrThrow
   */
  export type DiseaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diseases.
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diseases.
     */
    distinct?: DiseaseScalarFieldEnum | DiseaseScalarFieldEnum[]
  }

  /**
   * Disease findMany
   */
  export type DiseaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Diseases to fetch.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diseases.
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    distinct?: DiseaseScalarFieldEnum | DiseaseScalarFieldEnum[]
  }

  /**
   * Disease create
   */
  export type DiseaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Disease.
     */
    data: XOR<DiseaseCreateInput, DiseaseUncheckedCreateInput>
  }

  /**
   * Disease createMany
   */
  export type DiseaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diseases.
     */
    data: DiseaseCreateManyInput | DiseaseCreateManyInput[]
  }

  /**
   * Disease update
   */
  export type DiseaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Disease.
     */
    data: XOR<DiseaseUpdateInput, DiseaseUncheckedUpdateInput>
    /**
     * Choose, which Disease to update.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease updateMany
   */
  export type DiseaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diseases.
     */
    data: XOR<DiseaseUpdateManyMutationInput, DiseaseUncheckedUpdateManyInput>
    /**
     * Filter which Diseases to update
     */
    where?: DiseaseWhereInput
    /**
     * Limit how many Diseases to update.
     */
    limit?: number
  }

  /**
   * Disease upsert
   */
  export type DiseaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Disease to update in case it exists.
     */
    where: DiseaseWhereUniqueInput
    /**
     * In case the Disease found by the `where` argument doesn't exist, create a new Disease with this data.
     */
    create: XOR<DiseaseCreateInput, DiseaseUncheckedCreateInput>
    /**
     * In case the Disease was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiseaseUpdateInput, DiseaseUncheckedUpdateInput>
  }

  /**
   * Disease delete
   */
  export type DiseaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter which Disease to delete.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease deleteMany
   */
  export type DiseaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diseases to delete
     */
    where?: DiseaseWhereInput
    /**
     * Limit how many Diseases to delete.
     */
    limit?: number
  }

  /**
   * Disease findRaw
   */
  export type DiseaseFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Disease aggregateRaw
   */
  export type DiseaseAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Disease.diagnoses
   */
  export type Disease$diagnosesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    where?: DiagnosisWhereInput
    orderBy?: DiagnosisOrderByWithRelationInput | DiagnosisOrderByWithRelationInput[]
    cursor?: DiagnosisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosisScalarFieldEnum | DiagnosisScalarFieldEnum[]
  }

  /**
   * Disease without action
   */
  export type DiseaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
  }


  /**
   * Model Diagnosis
   */

  export type AggregateDiagnosis = {
    _count: DiagnosisCountAggregateOutputType | null
    _min: DiagnosisMinAggregateOutputType | null
    _max: DiagnosisMaxAggregateOutputType | null
  }

  export type DiagnosisMinAggregateOutputType = {
    id: string | null
    examinationId: string | null
    diseaseId: string | null
    severity: string | null
    notes: string | null
  }

  export type DiagnosisMaxAggregateOutputType = {
    id: string | null
    examinationId: string | null
    diseaseId: string | null
    severity: string | null
    notes: string | null
  }

  export type DiagnosisCountAggregateOutputType = {
    id: number
    examinationId: number
    diseaseId: number
    severity: number
    notes: number
    _all: number
  }


  export type DiagnosisMinAggregateInputType = {
    id?: true
    examinationId?: true
    diseaseId?: true
    severity?: true
    notes?: true
  }

  export type DiagnosisMaxAggregateInputType = {
    id?: true
    examinationId?: true
    diseaseId?: true
    severity?: true
    notes?: true
  }

  export type DiagnosisCountAggregateInputType = {
    id?: true
    examinationId?: true
    diseaseId?: true
    severity?: true
    notes?: true
    _all?: true
  }

  export type DiagnosisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnosis to aggregate.
     */
    where?: DiagnosisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnosisOrderByWithRelationInput | DiagnosisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiagnosisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diagnoses
    **/
    _count?: true | DiagnosisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosisMaxAggregateInputType
  }

  export type GetDiagnosisAggregateType<T extends DiagnosisAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnosis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnosis[P]>
      : GetScalarType<T[P], AggregateDiagnosis[P]>
  }




  export type DiagnosisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosisWhereInput
    orderBy?: DiagnosisOrderByWithAggregationInput | DiagnosisOrderByWithAggregationInput[]
    by: DiagnosisScalarFieldEnum[] | DiagnosisScalarFieldEnum
    having?: DiagnosisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosisCountAggregateInputType | true
    _min?: DiagnosisMinAggregateInputType
    _max?: DiagnosisMaxAggregateInputType
  }

  export type DiagnosisGroupByOutputType = {
    id: string
    examinationId: string
    diseaseId: string
    severity: string | null
    notes: string | null
    _count: DiagnosisCountAggregateOutputType | null
    _min: DiagnosisMinAggregateOutputType | null
    _max: DiagnosisMaxAggregateOutputType | null
  }

  type GetDiagnosisGroupByPayload<T extends DiagnosisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosisGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosisGroupByOutputType[P]>
        }
      >
    >


  export type DiagnosisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examinationId?: boolean
    diseaseId?: boolean
    severity?: boolean
    notes?: boolean
    examination?: boolean | ExaminationDefaultArgs<ExtArgs>
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosis"]>



  export type DiagnosisSelectScalar = {
    id?: boolean
    examinationId?: boolean
    diseaseId?: boolean
    severity?: boolean
    notes?: boolean
  }

  export type DiagnosisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "examinationId" | "diseaseId" | "severity" | "notes", ExtArgs["result"]["diagnosis"]>
  export type DiagnosisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examination?: boolean | ExaminationDefaultArgs<ExtArgs>
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }

  export type $DiagnosisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Diagnosis"
    objects: {
      examination: Prisma.$ExaminationPayload<ExtArgs>
      disease: Prisma.$DiseasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      examinationId: string
      diseaseId: string
      severity: string | null
      notes: string | null
    }, ExtArgs["result"]["diagnosis"]>
    composites: {}
  }

  type DiagnosisGetPayload<S extends boolean | null | undefined | DiagnosisDefaultArgs> = $Result.GetResult<Prisma.$DiagnosisPayload, S>

  type DiagnosisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiagnosisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnosisCountAggregateInputType | true
    }

  export interface DiagnosisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Diagnosis'], meta: { name: 'Diagnosis' } }
    /**
     * Find zero or one Diagnosis that matches the filter.
     * @param {DiagnosisFindUniqueArgs} args - Arguments to find a Diagnosis
     * @example
     * // Get one Diagnosis
     * const diagnosis = await prisma.diagnosis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiagnosisFindUniqueArgs>(args: SelectSubset<T, DiagnosisFindUniqueArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diagnosis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiagnosisFindUniqueOrThrowArgs} args - Arguments to find a Diagnosis
     * @example
     * // Get one Diagnosis
     * const diagnosis = await prisma.diagnosis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiagnosisFindUniqueOrThrowArgs>(args: SelectSubset<T, DiagnosisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnosis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisFindFirstArgs} args - Arguments to find a Diagnosis
     * @example
     * // Get one Diagnosis
     * const diagnosis = await prisma.diagnosis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiagnosisFindFirstArgs>(args?: SelectSubset<T, DiagnosisFindFirstArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnosis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisFindFirstOrThrowArgs} args - Arguments to find a Diagnosis
     * @example
     * // Get one Diagnosis
     * const diagnosis = await prisma.diagnosis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiagnosisFindFirstOrThrowArgs>(args?: SelectSubset<T, DiagnosisFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diagnoses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diagnoses
     * const diagnoses = await prisma.diagnosis.findMany()
     * 
     * // Get first 10 Diagnoses
     * const diagnoses = await prisma.diagnosis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diagnosisWithIdOnly = await prisma.diagnosis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiagnosisFindManyArgs>(args?: SelectSubset<T, DiagnosisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diagnosis.
     * @param {DiagnosisCreateArgs} args - Arguments to create a Diagnosis.
     * @example
     * // Create one Diagnosis
     * const Diagnosis = await prisma.diagnosis.create({
     *   data: {
     *     // ... data to create a Diagnosis
     *   }
     * })
     * 
     */
    create<T extends DiagnosisCreateArgs>(args: SelectSubset<T, DiagnosisCreateArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diagnoses.
     * @param {DiagnosisCreateManyArgs} args - Arguments to create many Diagnoses.
     * @example
     * // Create many Diagnoses
     * const diagnosis = await prisma.diagnosis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiagnosisCreateManyArgs>(args?: SelectSubset<T, DiagnosisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Diagnosis.
     * @param {DiagnosisDeleteArgs} args - Arguments to delete one Diagnosis.
     * @example
     * // Delete one Diagnosis
     * const Diagnosis = await prisma.diagnosis.delete({
     *   where: {
     *     // ... filter to delete one Diagnosis
     *   }
     * })
     * 
     */
    delete<T extends DiagnosisDeleteArgs>(args: SelectSubset<T, DiagnosisDeleteArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diagnosis.
     * @param {DiagnosisUpdateArgs} args - Arguments to update one Diagnosis.
     * @example
     * // Update one Diagnosis
     * const diagnosis = await prisma.diagnosis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiagnosisUpdateArgs>(args: SelectSubset<T, DiagnosisUpdateArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diagnoses.
     * @param {DiagnosisDeleteManyArgs} args - Arguments to filter Diagnoses to delete.
     * @example
     * // Delete a few Diagnoses
     * const { count } = await prisma.diagnosis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiagnosisDeleteManyArgs>(args?: SelectSubset<T, DiagnosisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diagnoses
     * const diagnosis = await prisma.diagnosis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiagnosisUpdateManyArgs>(args: SelectSubset<T, DiagnosisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Diagnosis.
     * @param {DiagnosisUpsertArgs} args - Arguments to update or create a Diagnosis.
     * @example
     * // Update or create a Diagnosis
     * const diagnosis = await prisma.diagnosis.upsert({
     *   create: {
     *     // ... data to create a Diagnosis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diagnosis we want to update
     *   }
     * })
     */
    upsert<T extends DiagnosisUpsertArgs>(args: SelectSubset<T, DiagnosisUpsertArgs<ExtArgs>>): Prisma__DiagnosisClient<$Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diagnoses that matches the filter.
     * @param {DiagnosisFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const diagnosis = await prisma.diagnosis.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DiagnosisFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Diagnosis.
     * @param {DiagnosisAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const diagnosis = await prisma.diagnosis.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DiagnosisAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisCountArgs} args - Arguments to filter Diagnoses to count.
     * @example
     * // Count the number of Diagnoses
     * const count = await prisma.diagnosis.count({
     *   where: {
     *     // ... the filter for the Diagnoses we want to count
     *   }
     * })
    **/
    count<T extends DiagnosisCountArgs>(
      args?: Subset<T, DiagnosisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diagnosis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiagnosisAggregateArgs>(args: Subset<T, DiagnosisAggregateArgs>): Prisma.PrismaPromise<GetDiagnosisAggregateType<T>>

    /**
     * Group by Diagnosis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosisGroupByArgs} args - Group by arguments.
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
      T extends DiagnosisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiagnosisGroupByArgs['orderBy'] }
        : { orderBy?: DiagnosisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiagnosisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Diagnosis model
   */
  readonly fields: DiagnosisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Diagnosis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiagnosisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    examination<T extends ExaminationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExaminationDefaultArgs<ExtArgs>>): Prisma__ExaminationClient<$Result.GetResult<Prisma.$ExaminationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    disease<T extends DiseaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiseaseDefaultArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Diagnosis model
   */
  interface DiagnosisFieldRefs {
    readonly id: FieldRef<"Diagnosis", 'String'>
    readonly examinationId: FieldRef<"Diagnosis", 'String'>
    readonly diseaseId: FieldRef<"Diagnosis", 'String'>
    readonly severity: FieldRef<"Diagnosis", 'String'>
    readonly notes: FieldRef<"Diagnosis", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Diagnosis findUnique
   */
  export type DiagnosisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * Filter, which Diagnosis to fetch.
     */
    where: DiagnosisWhereUniqueInput
  }

  /**
   * Diagnosis findUniqueOrThrow
   */
  export type DiagnosisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * Filter, which Diagnosis to fetch.
     */
    where: DiagnosisWhereUniqueInput
  }

  /**
   * Diagnosis findFirst
   */
  export type DiagnosisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * Filter, which Diagnosis to fetch.
     */
    where?: DiagnosisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnosisOrderByWithRelationInput | DiagnosisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnoses.
     */
    cursor?: DiagnosisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnoses.
     */
    distinct?: DiagnosisScalarFieldEnum | DiagnosisScalarFieldEnum[]
  }

  /**
   * Diagnosis findFirstOrThrow
   */
  export type DiagnosisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * Filter, which Diagnosis to fetch.
     */
    where?: DiagnosisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnosisOrderByWithRelationInput | DiagnosisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnoses.
     */
    cursor?: DiagnosisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnoses.
     */
    distinct?: DiagnosisScalarFieldEnum | DiagnosisScalarFieldEnum[]
  }

  /**
   * Diagnosis findMany
   */
  export type DiagnosisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * Filter, which Diagnoses to fetch.
     */
    where?: DiagnosisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnosisOrderByWithRelationInput | DiagnosisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diagnoses.
     */
    cursor?: DiagnosisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    distinct?: DiagnosisScalarFieldEnum | DiagnosisScalarFieldEnum[]
  }

  /**
   * Diagnosis create
   */
  export type DiagnosisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * The data needed to create a Diagnosis.
     */
    data: XOR<DiagnosisCreateInput, DiagnosisUncheckedCreateInput>
  }

  /**
   * Diagnosis createMany
   */
  export type DiagnosisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diagnoses.
     */
    data: DiagnosisCreateManyInput | DiagnosisCreateManyInput[]
  }

  /**
   * Diagnosis update
   */
  export type DiagnosisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * The data needed to update a Diagnosis.
     */
    data: XOR<DiagnosisUpdateInput, DiagnosisUncheckedUpdateInput>
    /**
     * Choose, which Diagnosis to update.
     */
    where: DiagnosisWhereUniqueInput
  }

  /**
   * Diagnosis updateMany
   */
  export type DiagnosisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diagnoses.
     */
    data: XOR<DiagnosisUpdateManyMutationInput, DiagnosisUncheckedUpdateManyInput>
    /**
     * Filter which Diagnoses to update
     */
    where?: DiagnosisWhereInput
    /**
     * Limit how many Diagnoses to update.
     */
    limit?: number
  }

  /**
   * Diagnosis upsert
   */
  export type DiagnosisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * The filter to search for the Diagnosis to update in case it exists.
     */
    where: DiagnosisWhereUniqueInput
    /**
     * In case the Diagnosis found by the `where` argument doesn't exist, create a new Diagnosis with this data.
     */
    create: XOR<DiagnosisCreateInput, DiagnosisUncheckedCreateInput>
    /**
     * In case the Diagnosis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiagnosisUpdateInput, DiagnosisUncheckedUpdateInput>
  }

  /**
   * Diagnosis delete
   */
  export type DiagnosisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
    /**
     * Filter which Diagnosis to delete.
     */
    where: DiagnosisWhereUniqueInput
  }

  /**
   * Diagnosis deleteMany
   */
  export type DiagnosisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnoses to delete
     */
    where?: DiagnosisWhereInput
    /**
     * Limit how many Diagnoses to delete.
     */
    limit?: number
  }

  /**
   * Diagnosis findRaw
   */
  export type DiagnosisFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Diagnosis aggregateRaw
   */
  export type DiagnosisAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Diagnosis without action
   */
  export type DiagnosisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: DiagnosisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: DiagnosisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosisInclude<ExtArgs> | null
  }


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
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
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
    name: string
    email: string
    password: string
    role: string
    createdAt: Date
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
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: string
      createdAt: Date
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
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
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
  }


  /**
   * Enums
   */

  export const SchoolScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    createdAt: 'createdAt'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gender: 'gender',
    dob: 'dob',
    schoolId: 'schoolId',
    createdAt: 'createdAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const ExaminationSessionScalarFieldEnum: {
    id: 'id',
    year: 'year',
    sessionName: 'sessionName',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt'
  };

  export type ExaminationSessionScalarFieldEnum = (typeof ExaminationSessionScalarFieldEnum)[keyof typeof ExaminationSessionScalarFieldEnum]


  export const ExaminationScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    sessionId: 'sessionId',
    date: 'date'
  };

  export type ExaminationScalarFieldEnum = (typeof ExaminationScalarFieldEnum)[keyof typeof ExaminationScalarFieldEnum]


  export const DiagnosisCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DiagnosisCategoryScalarFieldEnum = (typeof DiagnosisCategoryScalarFieldEnum)[keyof typeof DiagnosisCategoryScalarFieldEnum]


  export const DiseaseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    diagnosisCategoryId: 'diagnosisCategoryId'
  };

  export type DiseaseScalarFieldEnum = (typeof DiseaseScalarFieldEnum)[keyof typeof DiseaseScalarFieldEnum]


  export const DiagnosisScalarFieldEnum: {
    id: 'id',
    examinationId: 'examinationId',
    diseaseId: 'diseaseId',
    severity: 'severity',
    notes: 'notes'
  };

  export type DiagnosisScalarFieldEnum = (typeof DiagnosisScalarFieldEnum)[keyof typeof DiagnosisScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: StringFilter<"School"> | string
    name?: StringFilter<"School"> | string
    address?: StringFilter<"School"> | string
    createdAt?: DateTimeFilter<"School"> | Date | string
    students?: StudentListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    students?: StudentOrderByRelationAggregateInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    name?: StringFilter<"School"> | string
    address?: StringFilter<"School"> | string
    createdAt?: DateTimeFilter<"School"> | Date | string
    students?: StudentListRelationFilter
  }, "id">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"School"> | string
    name?: StringWithAggregatesFilter<"School"> | string
    address?: StringWithAggregatesFilter<"School"> | string
    createdAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    gender?: StringFilter<"Student"> | string
    dob?: DateTimeFilter<"Student"> | Date | string
    schoolId?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    examinations?: ExaminationListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    school?: SchoolOrderByWithRelationInput
    examinations?: ExaminationOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    gender?: StringFilter<"Student"> | string
    dob?: DateTimeFilter<"Student"> | Date | string
    schoolId?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    examinations?: ExaminationListRelationFilter
  }, "id">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    name?: StringWithAggregatesFilter<"Student"> | string
    gender?: StringWithAggregatesFilter<"Student"> | string
    dob?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    schoolId?: StringWithAggregatesFilter<"Student"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type ExaminationSessionWhereInput = {
    AND?: ExaminationSessionWhereInput | ExaminationSessionWhereInput[]
    OR?: ExaminationSessionWhereInput[]
    NOT?: ExaminationSessionWhereInput | ExaminationSessionWhereInput[]
    id?: StringFilter<"ExaminationSession"> | string
    year?: IntFilter<"ExaminationSession"> | number
    sessionName?: StringFilter<"ExaminationSession"> | string
    startDate?: DateTimeFilter<"ExaminationSession"> | Date | string
    endDate?: DateTimeFilter<"ExaminationSession"> | Date | string
    createdAt?: DateTimeFilter<"ExaminationSession"> | Date | string
    examinations?: ExaminationListRelationFilter
  }

  export type ExaminationSessionOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    sessionName?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    examinations?: ExaminationOrderByRelationAggregateInput
  }

  export type ExaminationSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExaminationSessionWhereInput | ExaminationSessionWhereInput[]
    OR?: ExaminationSessionWhereInput[]
    NOT?: ExaminationSessionWhereInput | ExaminationSessionWhereInput[]
    year?: IntFilter<"ExaminationSession"> | number
    sessionName?: StringFilter<"ExaminationSession"> | string
    startDate?: DateTimeFilter<"ExaminationSession"> | Date | string
    endDate?: DateTimeFilter<"ExaminationSession"> | Date | string
    createdAt?: DateTimeFilter<"ExaminationSession"> | Date | string
    examinations?: ExaminationListRelationFilter
  }, "id">

  export type ExaminationSessionOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    sessionName?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    _count?: ExaminationSessionCountOrderByAggregateInput
    _avg?: ExaminationSessionAvgOrderByAggregateInput
    _max?: ExaminationSessionMaxOrderByAggregateInput
    _min?: ExaminationSessionMinOrderByAggregateInput
    _sum?: ExaminationSessionSumOrderByAggregateInput
  }

  export type ExaminationSessionScalarWhereWithAggregatesInput = {
    AND?: ExaminationSessionScalarWhereWithAggregatesInput | ExaminationSessionScalarWhereWithAggregatesInput[]
    OR?: ExaminationSessionScalarWhereWithAggregatesInput[]
    NOT?: ExaminationSessionScalarWhereWithAggregatesInput | ExaminationSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExaminationSession"> | string
    year?: IntWithAggregatesFilter<"ExaminationSession"> | number
    sessionName?: StringWithAggregatesFilter<"ExaminationSession"> | string
    startDate?: DateTimeWithAggregatesFilter<"ExaminationSession"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"ExaminationSession"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ExaminationSession"> | Date | string
  }

  export type ExaminationWhereInput = {
    AND?: ExaminationWhereInput | ExaminationWhereInput[]
    OR?: ExaminationWhereInput[]
    NOT?: ExaminationWhereInput | ExaminationWhereInput[]
    id?: StringFilter<"Examination"> | string
    studentId?: StringFilter<"Examination"> | string
    sessionId?: StringFilter<"Examination"> | string
    date?: DateTimeFilter<"Examination"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    session?: XOR<ExaminationSessionScalarRelationFilter, ExaminationSessionWhereInput>
    diagnoses?: DiagnosisListRelationFilter
  }

  export type ExaminationOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    sessionId?: SortOrder
    date?: SortOrder
    student?: StudentOrderByWithRelationInput
    session?: ExaminationSessionOrderByWithRelationInput
    diagnoses?: DiagnosisOrderByRelationAggregateInput
  }

  export type ExaminationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExaminationWhereInput | ExaminationWhereInput[]
    OR?: ExaminationWhereInput[]
    NOT?: ExaminationWhereInput | ExaminationWhereInput[]
    studentId?: StringFilter<"Examination"> | string
    sessionId?: StringFilter<"Examination"> | string
    date?: DateTimeFilter<"Examination"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    session?: XOR<ExaminationSessionScalarRelationFilter, ExaminationSessionWhereInput>
    diagnoses?: DiagnosisListRelationFilter
  }, "id">

  export type ExaminationOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    sessionId?: SortOrder
    date?: SortOrder
    _count?: ExaminationCountOrderByAggregateInput
    _max?: ExaminationMaxOrderByAggregateInput
    _min?: ExaminationMinOrderByAggregateInput
  }

  export type ExaminationScalarWhereWithAggregatesInput = {
    AND?: ExaminationScalarWhereWithAggregatesInput | ExaminationScalarWhereWithAggregatesInput[]
    OR?: ExaminationScalarWhereWithAggregatesInput[]
    NOT?: ExaminationScalarWhereWithAggregatesInput | ExaminationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Examination"> | string
    studentId?: StringWithAggregatesFilter<"Examination"> | string
    sessionId?: StringWithAggregatesFilter<"Examination"> | string
    date?: DateTimeWithAggregatesFilter<"Examination"> | Date | string
  }

  export type DiagnosisCategoryWhereInput = {
    AND?: DiagnosisCategoryWhereInput | DiagnosisCategoryWhereInput[]
    OR?: DiagnosisCategoryWhereInput[]
    NOT?: DiagnosisCategoryWhereInput | DiagnosisCategoryWhereInput[]
    id?: StringFilter<"DiagnosisCategory"> | string
    name?: StringFilter<"DiagnosisCategory"> | string
    diseases?: DiseaseListRelationFilter
  }

  export type DiagnosisCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    diseases?: DiseaseOrderByRelationAggregateInput
  }

  export type DiagnosisCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: DiagnosisCategoryWhereInput | DiagnosisCategoryWhereInput[]
    OR?: DiagnosisCategoryWhereInput[]
    NOT?: DiagnosisCategoryWhereInput | DiagnosisCategoryWhereInput[]
    diseases?: DiseaseListRelationFilter
  }, "id" | "name">

  export type DiagnosisCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: DiagnosisCategoryCountOrderByAggregateInput
    _max?: DiagnosisCategoryMaxOrderByAggregateInput
    _min?: DiagnosisCategoryMinOrderByAggregateInput
  }

  export type DiagnosisCategoryScalarWhereWithAggregatesInput = {
    AND?: DiagnosisCategoryScalarWhereWithAggregatesInput | DiagnosisCategoryScalarWhereWithAggregatesInput[]
    OR?: DiagnosisCategoryScalarWhereWithAggregatesInput[]
    NOT?: DiagnosisCategoryScalarWhereWithAggregatesInput | DiagnosisCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DiagnosisCategory"> | string
    name?: StringWithAggregatesFilter<"DiagnosisCategory"> | string
  }

  export type DiseaseWhereInput = {
    AND?: DiseaseWhereInput | DiseaseWhereInput[]
    OR?: DiseaseWhereInput[]
    NOT?: DiseaseWhereInput | DiseaseWhereInput[]
    id?: StringFilter<"Disease"> | string
    name?: StringFilter<"Disease"> | string
    diagnosisCategoryId?: StringFilter<"Disease"> | string
    diagnosisCategory?: XOR<DiagnosisCategoryScalarRelationFilter, DiagnosisCategoryWhereInput>
    diagnoses?: DiagnosisListRelationFilter
  }

  export type DiseaseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    diagnosisCategoryId?: SortOrder
    diagnosisCategory?: DiagnosisCategoryOrderByWithRelationInput
    diagnoses?: DiagnosisOrderByRelationAggregateInput
  }

  export type DiseaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DiseaseWhereInput | DiseaseWhereInput[]
    OR?: DiseaseWhereInput[]
    NOT?: DiseaseWhereInput | DiseaseWhereInput[]
    name?: StringFilter<"Disease"> | string
    diagnosisCategoryId?: StringFilter<"Disease"> | string
    diagnosisCategory?: XOR<DiagnosisCategoryScalarRelationFilter, DiagnosisCategoryWhereInput>
    diagnoses?: DiagnosisListRelationFilter
  }, "id">

  export type DiseaseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    diagnosisCategoryId?: SortOrder
    _count?: DiseaseCountOrderByAggregateInput
    _max?: DiseaseMaxOrderByAggregateInput
    _min?: DiseaseMinOrderByAggregateInput
  }

  export type DiseaseScalarWhereWithAggregatesInput = {
    AND?: DiseaseScalarWhereWithAggregatesInput | DiseaseScalarWhereWithAggregatesInput[]
    OR?: DiseaseScalarWhereWithAggregatesInput[]
    NOT?: DiseaseScalarWhereWithAggregatesInput | DiseaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Disease"> | string
    name?: StringWithAggregatesFilter<"Disease"> | string
    diagnosisCategoryId?: StringWithAggregatesFilter<"Disease"> | string
  }

  export type DiagnosisWhereInput = {
    AND?: DiagnosisWhereInput | DiagnosisWhereInput[]
    OR?: DiagnosisWhereInput[]
    NOT?: DiagnosisWhereInput | DiagnosisWhereInput[]
    id?: StringFilter<"Diagnosis"> | string
    examinationId?: StringFilter<"Diagnosis"> | string
    diseaseId?: StringFilter<"Diagnosis"> | string
    severity?: StringNullableFilter<"Diagnosis"> | string | null
    notes?: StringNullableFilter<"Diagnosis"> | string | null
    examination?: XOR<ExaminationScalarRelationFilter, ExaminationWhereInput>
    disease?: XOR<DiseaseScalarRelationFilter, DiseaseWhereInput>
  }

  export type DiagnosisOrderByWithRelationInput = {
    id?: SortOrder
    examinationId?: SortOrder
    diseaseId?: SortOrder
    severity?: SortOrder
    notes?: SortOrder
    examination?: ExaminationOrderByWithRelationInput
    disease?: DiseaseOrderByWithRelationInput
  }

  export type DiagnosisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DiagnosisWhereInput | DiagnosisWhereInput[]
    OR?: DiagnosisWhereInput[]
    NOT?: DiagnosisWhereInput | DiagnosisWhereInput[]
    examinationId?: StringFilter<"Diagnosis"> | string
    diseaseId?: StringFilter<"Diagnosis"> | string
    severity?: StringNullableFilter<"Diagnosis"> | string | null
    notes?: StringNullableFilter<"Diagnosis"> | string | null
    examination?: XOR<ExaminationScalarRelationFilter, ExaminationWhereInput>
    disease?: XOR<DiseaseScalarRelationFilter, DiseaseWhereInput>
  }, "id">

  export type DiagnosisOrderByWithAggregationInput = {
    id?: SortOrder
    examinationId?: SortOrder
    diseaseId?: SortOrder
    severity?: SortOrder
    notes?: SortOrder
    _count?: DiagnosisCountOrderByAggregateInput
    _max?: DiagnosisMaxOrderByAggregateInput
    _min?: DiagnosisMinOrderByAggregateInput
  }

  export type DiagnosisScalarWhereWithAggregatesInput = {
    AND?: DiagnosisScalarWhereWithAggregatesInput | DiagnosisScalarWhereWithAggregatesInput[]
    OR?: DiagnosisScalarWhereWithAggregatesInput[]
    NOT?: DiagnosisScalarWhereWithAggregatesInput | DiagnosisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Diagnosis"> | string
    examinationId?: StringWithAggregatesFilter<"Diagnosis"> | string
    diseaseId?: StringWithAggregatesFilter<"Diagnosis"> | string
    severity?: StringNullableWithAggregatesFilter<"Diagnosis"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Diagnosis"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SchoolCreateInput = {
    id?: string
    name: string
    address: string
    createdAt?: Date | string
    students?: StudentCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    createdAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateManyInput = {
    id?: string
    name: string
    address: string
    createdAt?: Date | string
  }

  export type SchoolUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    id?: string
    name: string
    gender: string
    dob: Date | string
    createdAt?: Date | string
    school: SchoolCreateNestedOneWithoutStudentsInput
    examinations?: ExaminationCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    name: string
    gender: string
    dob: Date | string
    schoolId: string
    createdAt?: Date | string
    examinations?: ExaminationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutStudentsNestedInput
    examinations?: ExaminationUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examinations?: ExaminationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    name: string
    gender: string
    dob: Date | string
    schoolId: string
    createdAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExaminationSessionCreateInput = {
    id?: string
    year: number
    sessionName: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    examinations?: ExaminationCreateNestedManyWithoutSessionInput
  }

  export type ExaminationSessionUncheckedCreateInput = {
    id?: string
    year: number
    sessionName: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    examinations?: ExaminationUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ExaminationSessionUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    sessionName?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examinations?: ExaminationUpdateManyWithoutSessionNestedInput
  }

  export type ExaminationSessionUncheckedUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    sessionName?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examinations?: ExaminationUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ExaminationSessionCreateManyInput = {
    id?: string
    year: number
    sessionName: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
  }

  export type ExaminationSessionUpdateManyMutationInput = {
    year?: IntFieldUpdateOperationsInput | number
    sessionName?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExaminationSessionUncheckedUpdateManyInput = {
    year?: IntFieldUpdateOperationsInput | number
    sessionName?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExaminationCreateInput = {
    id?: string
    date: Date | string
    student: StudentCreateNestedOneWithoutExaminationsInput
    session: ExaminationSessionCreateNestedOneWithoutExaminationsInput
    diagnoses?: DiagnosisCreateNestedManyWithoutExaminationInput
  }

  export type ExaminationUncheckedCreateInput = {
    id?: string
    studentId: string
    sessionId: string
    date: Date | string
    diagnoses?: DiagnosisUncheckedCreateNestedManyWithoutExaminationInput
  }

  export type ExaminationUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutExaminationsNestedInput
    session?: ExaminationSessionUpdateOneRequiredWithoutExaminationsNestedInput
    diagnoses?: DiagnosisUpdateManyWithoutExaminationNestedInput
  }

  export type ExaminationUncheckedUpdateInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnoses?: DiagnosisUncheckedUpdateManyWithoutExaminationNestedInput
  }

  export type ExaminationCreateManyInput = {
    id?: string
    studentId: string
    sessionId: string
    date: Date | string
  }

  export type ExaminationUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExaminationUncheckedUpdateManyInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosisCategoryCreateInput = {
    id?: string
    name: string
    diseases?: DiseaseCreateNestedManyWithoutDiagnosisCategoryInput
  }

  export type DiagnosisCategoryUncheckedCreateInput = {
    id?: string
    name: string
    diseases?: DiseaseUncheckedCreateNestedManyWithoutDiagnosisCategoryInput
  }

  export type DiagnosisCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    diseases?: DiseaseUpdateManyWithoutDiagnosisCategoryNestedInput
  }

  export type DiagnosisCategoryUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    diseases?: DiseaseUncheckedUpdateManyWithoutDiagnosisCategoryNestedInput
  }

  export type DiagnosisCategoryCreateManyInput = {
    id?: string
    name: string
  }

  export type DiagnosisCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosisCategoryUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DiseaseCreateInput = {
    id?: string
    name: string
    diagnosisCategory: DiagnosisCategoryCreateNestedOneWithoutDiseasesInput
    diagnoses?: DiagnosisCreateNestedManyWithoutDiseaseInput
  }

  export type DiseaseUncheckedCreateInput = {
    id?: string
    name: string
    diagnosisCategoryId: string
    diagnoses?: DiagnosisUncheckedCreateNestedManyWithoutDiseaseInput
  }

  export type DiseaseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    diagnosisCategory?: DiagnosisCategoryUpdateOneRequiredWithoutDiseasesNestedInput
    diagnoses?: DiagnosisUpdateManyWithoutDiseaseNestedInput
  }

  export type DiseaseUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    diagnosisCategoryId?: StringFieldUpdateOperationsInput | string
    diagnoses?: DiagnosisUncheckedUpdateManyWithoutDiseaseNestedInput
  }

  export type DiseaseCreateManyInput = {
    id?: string
    name: string
    diagnosisCategoryId: string
  }

  export type DiseaseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DiseaseUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    diagnosisCategoryId?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosisCreateInput = {
    id?: string
    severity?: string | null
    notes?: string | null
    examination: ExaminationCreateNestedOneWithoutDiagnosesInput
    disease: DiseaseCreateNestedOneWithoutDiagnosesInput
  }

  export type DiagnosisUncheckedCreateInput = {
    id?: string
    examinationId: string
    diseaseId: string
    severity?: string | null
    notes?: string | null
  }

  export type DiagnosisUpdateInput = {
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    examination?: ExaminationUpdateOneRequiredWithoutDiagnosesNestedInput
    disease?: DiseaseUpdateOneRequiredWithoutDiagnosesNestedInput
  }

  export type DiagnosisUncheckedUpdateInput = {
    examinationId?: StringFieldUpdateOperationsInput | string
    diseaseId?: StringFieldUpdateOperationsInput | string
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiagnosisCreateManyInput = {
    id?: string
    examinationId: string
    diseaseId: string
    severity?: string | null
    notes?: string | null
  }

  export type DiagnosisUpdateManyMutationInput = {
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiagnosisUncheckedUpdateManyInput = {
    examinationId?: StringFieldUpdateOperationsInput | string
    diseaseId?: StringFieldUpdateOperationsInput | string
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: string
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
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

  export type SchoolScalarRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type ExaminationListRelationFilter = {
    every?: ExaminationWhereInput
    some?: ExaminationWhereInput
    none?: ExaminationWhereInput
  }

  export type ExaminationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ExaminationSessionCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    sessionName?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type ExaminationSessionAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type ExaminationSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    sessionName?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type ExaminationSessionMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    sessionName?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type ExaminationSessionSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type ExaminationSessionScalarRelationFilter = {
    is?: ExaminationSessionWhereInput
    isNot?: ExaminationSessionWhereInput
  }

  export type DiagnosisListRelationFilter = {
    every?: DiagnosisWhereInput
    some?: DiagnosisWhereInput
    none?: DiagnosisWhereInput
  }

  export type DiagnosisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExaminationCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    sessionId?: SortOrder
    date?: SortOrder
  }

  export type ExaminationMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    sessionId?: SortOrder
    date?: SortOrder
  }

  export type ExaminationMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    sessionId?: SortOrder
    date?: SortOrder
  }

  export type DiseaseListRelationFilter = {
    every?: DiseaseWhereInput
    some?: DiseaseWhereInput
    none?: DiseaseWhereInput
  }

  export type DiseaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiagnosisCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DiagnosisCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DiagnosisCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DiagnosisCategoryScalarRelationFilter = {
    is?: DiagnosisCategoryWhereInput
    isNot?: DiagnosisCategoryWhereInput
  }

  export type DiseaseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    diagnosisCategoryId?: SortOrder
  }

  export type DiseaseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    diagnosisCategoryId?: SortOrder
  }

  export type DiseaseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    diagnosisCategoryId?: SortOrder
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
    isSet?: boolean
  }

  export type ExaminationScalarRelationFilter = {
    is?: ExaminationWhereInput
    isNot?: ExaminationWhereInput
  }

  export type DiseaseScalarRelationFilter = {
    is?: DiseaseWhereInput
    isNot?: DiseaseWhereInput
  }

  export type DiagnosisCountOrderByAggregateInput = {
    id?: SortOrder
    examinationId?: SortOrder
    diseaseId?: SortOrder
    severity?: SortOrder
    notes?: SortOrder
  }

  export type DiagnosisMaxOrderByAggregateInput = {
    id?: SortOrder
    examinationId?: SortOrder
    diseaseId?: SortOrder
    severity?: SortOrder
    notes?: SortOrder
  }

  export type DiagnosisMinOrderByAggregateInput = {
    id?: SortOrder
    examinationId?: SortOrder
    diseaseId?: SortOrder
    severity?: SortOrder
    notes?: SortOrder
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
    isSet?: boolean
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentCreateNestedManyWithoutSchoolInput = {
    create?: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput> | StudentCreateWithoutSchoolInput[] | StudentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSchoolInput | StudentCreateOrConnectWithoutSchoolInput[]
    createMany?: StudentCreateManySchoolInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput> | StudentCreateWithoutSchoolInput[] | StudentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSchoolInput | StudentCreateOrConnectWithoutSchoolInput[]
    createMany?: StudentCreateManySchoolInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudentUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput> | StudentCreateWithoutSchoolInput[] | StudentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSchoolInput | StudentCreateOrConnectWithoutSchoolInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutSchoolInput | StudentUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: StudentCreateManySchoolInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutSchoolInput | StudentUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutSchoolInput | StudentUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput> | StudentCreateWithoutSchoolInput[] | StudentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSchoolInput | StudentCreateOrConnectWithoutSchoolInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutSchoolInput | StudentUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: StudentCreateManySchoolInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutSchoolInput | StudentUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutSchoolInput | StudentUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type SchoolCreateNestedOneWithoutStudentsInput = {
    create?: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutStudentsInput
    connect?: SchoolWhereUniqueInput
  }

  export type ExaminationCreateNestedManyWithoutStudentInput = {
    create?: XOR<ExaminationCreateWithoutStudentInput, ExaminationUncheckedCreateWithoutStudentInput> | ExaminationCreateWithoutStudentInput[] | ExaminationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutStudentInput | ExaminationCreateOrConnectWithoutStudentInput[]
    createMany?: ExaminationCreateManyStudentInputEnvelope
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
  }

  export type ExaminationUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ExaminationCreateWithoutStudentInput, ExaminationUncheckedCreateWithoutStudentInput> | ExaminationCreateWithoutStudentInput[] | ExaminationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutStudentInput | ExaminationCreateOrConnectWithoutStudentInput[]
    createMany?: ExaminationCreateManyStudentInputEnvelope
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
  }

  export type SchoolUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutStudentsInput
    upsert?: SchoolUpsertWithoutStudentsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutStudentsInput, SchoolUpdateWithoutStudentsInput>, SchoolUncheckedUpdateWithoutStudentsInput>
  }

  export type ExaminationUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ExaminationCreateWithoutStudentInput, ExaminationUncheckedCreateWithoutStudentInput> | ExaminationCreateWithoutStudentInput[] | ExaminationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutStudentInput | ExaminationCreateOrConnectWithoutStudentInput[]
    upsert?: ExaminationUpsertWithWhereUniqueWithoutStudentInput | ExaminationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ExaminationCreateManyStudentInputEnvelope
    set?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    disconnect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    delete?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    update?: ExaminationUpdateWithWhereUniqueWithoutStudentInput | ExaminationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ExaminationUpdateManyWithWhereWithoutStudentInput | ExaminationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ExaminationScalarWhereInput | ExaminationScalarWhereInput[]
  }

  export type ExaminationUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ExaminationCreateWithoutStudentInput, ExaminationUncheckedCreateWithoutStudentInput> | ExaminationCreateWithoutStudentInput[] | ExaminationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutStudentInput | ExaminationCreateOrConnectWithoutStudentInput[]
    upsert?: ExaminationUpsertWithWhereUniqueWithoutStudentInput | ExaminationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ExaminationCreateManyStudentInputEnvelope
    set?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    disconnect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    delete?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    update?: ExaminationUpdateWithWhereUniqueWithoutStudentInput | ExaminationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ExaminationUpdateManyWithWhereWithoutStudentInput | ExaminationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ExaminationScalarWhereInput | ExaminationScalarWhereInput[]
  }

  export type ExaminationCreateNestedManyWithoutSessionInput = {
    create?: XOR<ExaminationCreateWithoutSessionInput, ExaminationUncheckedCreateWithoutSessionInput> | ExaminationCreateWithoutSessionInput[] | ExaminationUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutSessionInput | ExaminationCreateOrConnectWithoutSessionInput[]
    createMany?: ExaminationCreateManySessionInputEnvelope
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
  }

  export type ExaminationUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<ExaminationCreateWithoutSessionInput, ExaminationUncheckedCreateWithoutSessionInput> | ExaminationCreateWithoutSessionInput[] | ExaminationUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutSessionInput | ExaminationCreateOrConnectWithoutSessionInput[]
    createMany?: ExaminationCreateManySessionInputEnvelope
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExaminationUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ExaminationCreateWithoutSessionInput, ExaminationUncheckedCreateWithoutSessionInput> | ExaminationCreateWithoutSessionInput[] | ExaminationUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutSessionInput | ExaminationCreateOrConnectWithoutSessionInput[]
    upsert?: ExaminationUpsertWithWhereUniqueWithoutSessionInput | ExaminationUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ExaminationCreateManySessionInputEnvelope
    set?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    disconnect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    delete?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    update?: ExaminationUpdateWithWhereUniqueWithoutSessionInput | ExaminationUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ExaminationUpdateManyWithWhereWithoutSessionInput | ExaminationUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ExaminationScalarWhereInput | ExaminationScalarWhereInput[]
  }

  export type ExaminationUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ExaminationCreateWithoutSessionInput, ExaminationUncheckedCreateWithoutSessionInput> | ExaminationCreateWithoutSessionInput[] | ExaminationUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ExaminationCreateOrConnectWithoutSessionInput | ExaminationCreateOrConnectWithoutSessionInput[]
    upsert?: ExaminationUpsertWithWhereUniqueWithoutSessionInput | ExaminationUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ExaminationCreateManySessionInputEnvelope
    set?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    disconnect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    delete?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    connect?: ExaminationWhereUniqueInput | ExaminationWhereUniqueInput[]
    update?: ExaminationUpdateWithWhereUniqueWithoutSessionInput | ExaminationUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ExaminationUpdateManyWithWhereWithoutSessionInput | ExaminationUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ExaminationScalarWhereInput | ExaminationScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutExaminationsInput = {
    create?: XOR<StudentCreateWithoutExaminationsInput, StudentUncheckedCreateWithoutExaminationsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutExaminationsInput
    connect?: StudentWhereUniqueInput
  }

  export type ExaminationSessionCreateNestedOneWithoutExaminationsInput = {
    create?: XOR<ExaminationSessionCreateWithoutExaminationsInput, ExaminationSessionUncheckedCreateWithoutExaminationsInput>
    connectOrCreate?: ExaminationSessionCreateOrConnectWithoutExaminationsInput
    connect?: ExaminationSessionWhereUniqueInput
  }

  export type DiagnosisCreateNestedManyWithoutExaminationInput = {
    create?: XOR<DiagnosisCreateWithoutExaminationInput, DiagnosisUncheckedCreateWithoutExaminationInput> | DiagnosisCreateWithoutExaminationInput[] | DiagnosisUncheckedCreateWithoutExaminationInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutExaminationInput | DiagnosisCreateOrConnectWithoutExaminationInput[]
    createMany?: DiagnosisCreateManyExaminationInputEnvelope
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
  }

  export type DiagnosisUncheckedCreateNestedManyWithoutExaminationInput = {
    create?: XOR<DiagnosisCreateWithoutExaminationInput, DiagnosisUncheckedCreateWithoutExaminationInput> | DiagnosisCreateWithoutExaminationInput[] | DiagnosisUncheckedCreateWithoutExaminationInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutExaminationInput | DiagnosisCreateOrConnectWithoutExaminationInput[]
    createMany?: DiagnosisCreateManyExaminationInputEnvelope
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
  }

  export type StudentUpdateOneRequiredWithoutExaminationsNestedInput = {
    create?: XOR<StudentCreateWithoutExaminationsInput, StudentUncheckedCreateWithoutExaminationsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutExaminationsInput
    upsert?: StudentUpsertWithoutExaminationsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutExaminationsInput, StudentUpdateWithoutExaminationsInput>, StudentUncheckedUpdateWithoutExaminationsInput>
  }

  export type ExaminationSessionUpdateOneRequiredWithoutExaminationsNestedInput = {
    create?: XOR<ExaminationSessionCreateWithoutExaminationsInput, ExaminationSessionUncheckedCreateWithoutExaminationsInput>
    connectOrCreate?: ExaminationSessionCreateOrConnectWithoutExaminationsInput
    upsert?: ExaminationSessionUpsertWithoutExaminationsInput
    connect?: ExaminationSessionWhereUniqueInput
    update?: XOR<XOR<ExaminationSessionUpdateToOneWithWhereWithoutExaminationsInput, ExaminationSessionUpdateWithoutExaminationsInput>, ExaminationSessionUncheckedUpdateWithoutExaminationsInput>
  }

  export type DiagnosisUpdateManyWithoutExaminationNestedInput = {
    create?: XOR<DiagnosisCreateWithoutExaminationInput, DiagnosisUncheckedCreateWithoutExaminationInput> | DiagnosisCreateWithoutExaminationInput[] | DiagnosisUncheckedCreateWithoutExaminationInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutExaminationInput | DiagnosisCreateOrConnectWithoutExaminationInput[]
    upsert?: DiagnosisUpsertWithWhereUniqueWithoutExaminationInput | DiagnosisUpsertWithWhereUniqueWithoutExaminationInput[]
    createMany?: DiagnosisCreateManyExaminationInputEnvelope
    set?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    disconnect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    delete?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    update?: DiagnosisUpdateWithWhereUniqueWithoutExaminationInput | DiagnosisUpdateWithWhereUniqueWithoutExaminationInput[]
    updateMany?: DiagnosisUpdateManyWithWhereWithoutExaminationInput | DiagnosisUpdateManyWithWhereWithoutExaminationInput[]
    deleteMany?: DiagnosisScalarWhereInput | DiagnosisScalarWhereInput[]
  }

  export type DiagnosisUncheckedUpdateManyWithoutExaminationNestedInput = {
    create?: XOR<DiagnosisCreateWithoutExaminationInput, DiagnosisUncheckedCreateWithoutExaminationInput> | DiagnosisCreateWithoutExaminationInput[] | DiagnosisUncheckedCreateWithoutExaminationInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutExaminationInput | DiagnosisCreateOrConnectWithoutExaminationInput[]
    upsert?: DiagnosisUpsertWithWhereUniqueWithoutExaminationInput | DiagnosisUpsertWithWhereUniqueWithoutExaminationInput[]
    createMany?: DiagnosisCreateManyExaminationInputEnvelope
    set?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    disconnect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    delete?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    update?: DiagnosisUpdateWithWhereUniqueWithoutExaminationInput | DiagnosisUpdateWithWhereUniqueWithoutExaminationInput[]
    updateMany?: DiagnosisUpdateManyWithWhereWithoutExaminationInput | DiagnosisUpdateManyWithWhereWithoutExaminationInput[]
    deleteMany?: DiagnosisScalarWhereInput | DiagnosisScalarWhereInput[]
  }

  export type DiseaseCreateNestedManyWithoutDiagnosisCategoryInput = {
    create?: XOR<DiseaseCreateWithoutDiagnosisCategoryInput, DiseaseUncheckedCreateWithoutDiagnosisCategoryInput> | DiseaseCreateWithoutDiagnosisCategoryInput[] | DiseaseUncheckedCreateWithoutDiagnosisCategoryInput[]
    connectOrCreate?: DiseaseCreateOrConnectWithoutDiagnosisCategoryInput | DiseaseCreateOrConnectWithoutDiagnosisCategoryInput[]
    createMany?: DiseaseCreateManyDiagnosisCategoryInputEnvelope
    connect?: DiseaseWhereUniqueInput | DiseaseWhereUniqueInput[]
  }

  export type DiseaseUncheckedCreateNestedManyWithoutDiagnosisCategoryInput = {
    create?: XOR<DiseaseCreateWithoutDiagnosisCategoryInput, DiseaseUncheckedCreateWithoutDiagnosisCategoryInput> | DiseaseCreateWithoutDiagnosisCategoryInput[] | DiseaseUncheckedCreateWithoutDiagnosisCategoryInput[]
    connectOrCreate?: DiseaseCreateOrConnectWithoutDiagnosisCategoryInput | DiseaseCreateOrConnectWithoutDiagnosisCategoryInput[]
    createMany?: DiseaseCreateManyDiagnosisCategoryInputEnvelope
    connect?: DiseaseWhereUniqueInput | DiseaseWhereUniqueInput[]
  }

  export type DiseaseUpdateManyWithoutDiagnosisCategoryNestedInput = {
    create?: XOR<DiseaseCreateWithoutDiagnosisCategoryInput, DiseaseUncheckedCreateWithoutDiagnosisCategoryInput> | DiseaseCreateWithoutDiagnosisCategoryInput[] | DiseaseUncheckedCreateWithoutDiagnosisCategoryInput[]
    connectOrCreate?: DiseaseCreateOrConnectWithoutDiagnosisCategoryInput | DiseaseCreateOrConnectWithoutDiagnosisCategoryInput[]
    upsert?: DiseaseUpsertWithWhereUniqueWithoutDiagnosisCategoryInput | DiseaseUpsertWithWhereUniqueWithoutDiagnosisCategoryInput[]
    createMany?: DiseaseCreateManyDiagnosisCategoryInputEnvelope
    set?: DiseaseWhereUniqueInput | DiseaseWhereUniqueInput[]
    disconnect?: DiseaseWhereUniqueInput | DiseaseWhereUniqueInput[]
    delete?: DiseaseWhereUniqueInput | DiseaseWhereUniqueInput[]
    connect?: DiseaseWhereUniqueInput | DiseaseWhereUniqueInput[]
    update?: DiseaseUpdateWithWhereUniqueWithoutDiagnosisCategoryInput | DiseaseUpdateWithWhereUniqueWithoutDiagnosisCategoryInput[]
    updateMany?: DiseaseUpdateManyWithWhereWithoutDiagnosisCategoryInput | DiseaseUpdateManyWithWhereWithoutDiagnosisCategoryInput[]
    deleteMany?: DiseaseScalarWhereInput | DiseaseScalarWhereInput[]
  }

  export type DiseaseUncheckedUpdateManyWithoutDiagnosisCategoryNestedInput = {
    create?: XOR<DiseaseCreateWithoutDiagnosisCategoryInput, DiseaseUncheckedCreateWithoutDiagnosisCategoryInput> | DiseaseCreateWithoutDiagnosisCategoryInput[] | DiseaseUncheckedCreateWithoutDiagnosisCategoryInput[]
    connectOrCreate?: DiseaseCreateOrConnectWithoutDiagnosisCategoryInput | DiseaseCreateOrConnectWithoutDiagnosisCategoryInput[]
    upsert?: DiseaseUpsertWithWhereUniqueWithoutDiagnosisCategoryInput | DiseaseUpsertWithWhereUniqueWithoutDiagnosisCategoryInput[]
    createMany?: DiseaseCreateManyDiagnosisCategoryInputEnvelope
    set?: DiseaseWhereUniqueInput | DiseaseWhereUniqueInput[]
    disconnect?: DiseaseWhereUniqueInput | DiseaseWhereUniqueInput[]
    delete?: DiseaseWhereUniqueInput | DiseaseWhereUniqueInput[]
    connect?: DiseaseWhereUniqueInput | DiseaseWhereUniqueInput[]
    update?: DiseaseUpdateWithWhereUniqueWithoutDiagnosisCategoryInput | DiseaseUpdateWithWhereUniqueWithoutDiagnosisCategoryInput[]
    updateMany?: DiseaseUpdateManyWithWhereWithoutDiagnosisCategoryInput | DiseaseUpdateManyWithWhereWithoutDiagnosisCategoryInput[]
    deleteMany?: DiseaseScalarWhereInput | DiseaseScalarWhereInput[]
  }

  export type DiagnosisCategoryCreateNestedOneWithoutDiseasesInput = {
    create?: XOR<DiagnosisCategoryCreateWithoutDiseasesInput, DiagnosisCategoryUncheckedCreateWithoutDiseasesInput>
    connectOrCreate?: DiagnosisCategoryCreateOrConnectWithoutDiseasesInput
    connect?: DiagnosisCategoryWhereUniqueInput
  }

  export type DiagnosisCreateNestedManyWithoutDiseaseInput = {
    create?: XOR<DiagnosisCreateWithoutDiseaseInput, DiagnosisUncheckedCreateWithoutDiseaseInput> | DiagnosisCreateWithoutDiseaseInput[] | DiagnosisUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutDiseaseInput | DiagnosisCreateOrConnectWithoutDiseaseInput[]
    createMany?: DiagnosisCreateManyDiseaseInputEnvelope
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
  }

  export type DiagnosisUncheckedCreateNestedManyWithoutDiseaseInput = {
    create?: XOR<DiagnosisCreateWithoutDiseaseInput, DiagnosisUncheckedCreateWithoutDiseaseInput> | DiagnosisCreateWithoutDiseaseInput[] | DiagnosisUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutDiseaseInput | DiagnosisCreateOrConnectWithoutDiseaseInput[]
    createMany?: DiagnosisCreateManyDiseaseInputEnvelope
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
  }

  export type DiagnosisCategoryUpdateOneRequiredWithoutDiseasesNestedInput = {
    create?: XOR<DiagnosisCategoryCreateWithoutDiseasesInput, DiagnosisCategoryUncheckedCreateWithoutDiseasesInput>
    connectOrCreate?: DiagnosisCategoryCreateOrConnectWithoutDiseasesInput
    upsert?: DiagnosisCategoryUpsertWithoutDiseasesInput
    connect?: DiagnosisCategoryWhereUniqueInput
    update?: XOR<XOR<DiagnosisCategoryUpdateToOneWithWhereWithoutDiseasesInput, DiagnosisCategoryUpdateWithoutDiseasesInput>, DiagnosisCategoryUncheckedUpdateWithoutDiseasesInput>
  }

  export type DiagnosisUpdateManyWithoutDiseaseNestedInput = {
    create?: XOR<DiagnosisCreateWithoutDiseaseInput, DiagnosisUncheckedCreateWithoutDiseaseInput> | DiagnosisCreateWithoutDiseaseInput[] | DiagnosisUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutDiseaseInput | DiagnosisCreateOrConnectWithoutDiseaseInput[]
    upsert?: DiagnosisUpsertWithWhereUniqueWithoutDiseaseInput | DiagnosisUpsertWithWhereUniqueWithoutDiseaseInput[]
    createMany?: DiagnosisCreateManyDiseaseInputEnvelope
    set?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    disconnect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    delete?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    update?: DiagnosisUpdateWithWhereUniqueWithoutDiseaseInput | DiagnosisUpdateWithWhereUniqueWithoutDiseaseInput[]
    updateMany?: DiagnosisUpdateManyWithWhereWithoutDiseaseInput | DiagnosisUpdateManyWithWhereWithoutDiseaseInput[]
    deleteMany?: DiagnosisScalarWhereInput | DiagnosisScalarWhereInput[]
  }

  export type DiagnosisUncheckedUpdateManyWithoutDiseaseNestedInput = {
    create?: XOR<DiagnosisCreateWithoutDiseaseInput, DiagnosisUncheckedCreateWithoutDiseaseInput> | DiagnosisCreateWithoutDiseaseInput[] | DiagnosisUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: DiagnosisCreateOrConnectWithoutDiseaseInput | DiagnosisCreateOrConnectWithoutDiseaseInput[]
    upsert?: DiagnosisUpsertWithWhereUniqueWithoutDiseaseInput | DiagnosisUpsertWithWhereUniqueWithoutDiseaseInput[]
    createMany?: DiagnosisCreateManyDiseaseInputEnvelope
    set?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    disconnect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    delete?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    connect?: DiagnosisWhereUniqueInput | DiagnosisWhereUniqueInput[]
    update?: DiagnosisUpdateWithWhereUniqueWithoutDiseaseInput | DiagnosisUpdateWithWhereUniqueWithoutDiseaseInput[]
    updateMany?: DiagnosisUpdateManyWithWhereWithoutDiseaseInput | DiagnosisUpdateManyWithWhereWithoutDiseaseInput[]
    deleteMany?: DiagnosisScalarWhereInput | DiagnosisScalarWhereInput[]
  }

  export type ExaminationCreateNestedOneWithoutDiagnosesInput = {
    create?: XOR<ExaminationCreateWithoutDiagnosesInput, ExaminationUncheckedCreateWithoutDiagnosesInput>
    connectOrCreate?: ExaminationCreateOrConnectWithoutDiagnosesInput
    connect?: ExaminationWhereUniqueInput
  }

  export type DiseaseCreateNestedOneWithoutDiagnosesInput = {
    create?: XOR<DiseaseCreateWithoutDiagnosesInput, DiseaseUncheckedCreateWithoutDiagnosesInput>
    connectOrCreate?: DiseaseCreateOrConnectWithoutDiagnosesInput
    connect?: DiseaseWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type ExaminationUpdateOneRequiredWithoutDiagnosesNestedInput = {
    create?: XOR<ExaminationCreateWithoutDiagnosesInput, ExaminationUncheckedCreateWithoutDiagnosesInput>
    connectOrCreate?: ExaminationCreateOrConnectWithoutDiagnosesInput
    upsert?: ExaminationUpsertWithoutDiagnosesInput
    connect?: ExaminationWhereUniqueInput
    update?: XOR<XOR<ExaminationUpdateToOneWithWhereWithoutDiagnosesInput, ExaminationUpdateWithoutDiagnosesInput>, ExaminationUncheckedUpdateWithoutDiagnosesInput>
  }

  export type DiseaseUpdateOneRequiredWithoutDiagnosesNestedInput = {
    create?: XOR<DiseaseCreateWithoutDiagnosesInput, DiseaseUncheckedCreateWithoutDiagnosesInput>
    connectOrCreate?: DiseaseCreateOrConnectWithoutDiagnosesInput
    upsert?: DiseaseUpsertWithoutDiagnosesInput
    connect?: DiseaseWhereUniqueInput
    update?: XOR<XOR<DiseaseUpdateToOneWithWhereWithoutDiagnosesInput, DiseaseUpdateWithoutDiagnosesInput>, DiseaseUncheckedUpdateWithoutDiagnosesInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type StudentCreateWithoutSchoolInput = {
    id?: string
    name: string
    gender: string
    dob: Date | string
    createdAt?: Date | string
    examinations?: ExaminationCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSchoolInput = {
    id?: string
    name: string
    gender: string
    dob: Date | string
    createdAt?: Date | string
    examinations?: ExaminationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSchoolInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput>
  }

  export type StudentCreateManySchoolInputEnvelope = {
    data: StudentCreateManySchoolInput | StudentCreateManySchoolInput[]
  }

  export type StudentUpsertWithWhereUniqueWithoutSchoolInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutSchoolInput, StudentUncheckedUpdateWithoutSchoolInput>
    create: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutSchoolInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutSchoolInput, StudentUncheckedUpdateWithoutSchoolInput>
  }

  export type StudentUpdateManyWithWhereWithoutSchoolInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutSchoolInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    gender?: StringFilter<"Student"> | string
    dob?: DateTimeFilter<"Student"> | Date | string
    schoolId?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
  }

  export type SchoolCreateWithoutStudentsInput = {
    id?: string
    name: string
    address: string
    createdAt?: Date | string
  }

  export type SchoolUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    address: string
    createdAt?: Date | string
  }

  export type SchoolCreateOrConnectWithoutStudentsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
  }

  export type ExaminationCreateWithoutStudentInput = {
    id?: string
    date: Date | string
    session: ExaminationSessionCreateNestedOneWithoutExaminationsInput
    diagnoses?: DiagnosisCreateNestedManyWithoutExaminationInput
  }

  export type ExaminationUncheckedCreateWithoutStudentInput = {
    id?: string
    sessionId: string
    date: Date | string
    diagnoses?: DiagnosisUncheckedCreateNestedManyWithoutExaminationInput
  }

  export type ExaminationCreateOrConnectWithoutStudentInput = {
    where: ExaminationWhereUniqueInput
    create: XOR<ExaminationCreateWithoutStudentInput, ExaminationUncheckedCreateWithoutStudentInput>
  }

  export type ExaminationCreateManyStudentInputEnvelope = {
    data: ExaminationCreateManyStudentInput | ExaminationCreateManyStudentInput[]
  }

  export type SchoolUpsertWithoutStudentsInput = {
    update: XOR<SchoolUpdateWithoutStudentsInput, SchoolUncheckedUpdateWithoutStudentsInput>
    create: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutStudentsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutStudentsInput, SchoolUncheckedUpdateWithoutStudentsInput>
  }

  export type SchoolUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolUncheckedUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExaminationUpsertWithWhereUniqueWithoutStudentInput = {
    where: ExaminationWhereUniqueInput
    update: XOR<ExaminationUpdateWithoutStudentInput, ExaminationUncheckedUpdateWithoutStudentInput>
    create: XOR<ExaminationCreateWithoutStudentInput, ExaminationUncheckedCreateWithoutStudentInput>
  }

  export type ExaminationUpdateWithWhereUniqueWithoutStudentInput = {
    where: ExaminationWhereUniqueInput
    data: XOR<ExaminationUpdateWithoutStudentInput, ExaminationUncheckedUpdateWithoutStudentInput>
  }

  export type ExaminationUpdateManyWithWhereWithoutStudentInput = {
    where: ExaminationScalarWhereInput
    data: XOR<ExaminationUpdateManyMutationInput, ExaminationUncheckedUpdateManyWithoutStudentInput>
  }

  export type ExaminationScalarWhereInput = {
    AND?: ExaminationScalarWhereInput | ExaminationScalarWhereInput[]
    OR?: ExaminationScalarWhereInput[]
    NOT?: ExaminationScalarWhereInput | ExaminationScalarWhereInput[]
    id?: StringFilter<"Examination"> | string
    studentId?: StringFilter<"Examination"> | string
    sessionId?: StringFilter<"Examination"> | string
    date?: DateTimeFilter<"Examination"> | Date | string
  }

  export type ExaminationCreateWithoutSessionInput = {
    id?: string
    date: Date | string
    student: StudentCreateNestedOneWithoutExaminationsInput
    diagnoses?: DiagnosisCreateNestedManyWithoutExaminationInput
  }

  export type ExaminationUncheckedCreateWithoutSessionInput = {
    id?: string
    studentId: string
    date: Date | string
    diagnoses?: DiagnosisUncheckedCreateNestedManyWithoutExaminationInput
  }

  export type ExaminationCreateOrConnectWithoutSessionInput = {
    where: ExaminationWhereUniqueInput
    create: XOR<ExaminationCreateWithoutSessionInput, ExaminationUncheckedCreateWithoutSessionInput>
  }

  export type ExaminationCreateManySessionInputEnvelope = {
    data: ExaminationCreateManySessionInput | ExaminationCreateManySessionInput[]
  }

  export type ExaminationUpsertWithWhereUniqueWithoutSessionInput = {
    where: ExaminationWhereUniqueInput
    update: XOR<ExaminationUpdateWithoutSessionInput, ExaminationUncheckedUpdateWithoutSessionInput>
    create: XOR<ExaminationCreateWithoutSessionInput, ExaminationUncheckedCreateWithoutSessionInput>
  }

  export type ExaminationUpdateWithWhereUniqueWithoutSessionInput = {
    where: ExaminationWhereUniqueInput
    data: XOR<ExaminationUpdateWithoutSessionInput, ExaminationUncheckedUpdateWithoutSessionInput>
  }

  export type ExaminationUpdateManyWithWhereWithoutSessionInput = {
    where: ExaminationScalarWhereInput
    data: XOR<ExaminationUpdateManyMutationInput, ExaminationUncheckedUpdateManyWithoutSessionInput>
  }

  export type StudentCreateWithoutExaminationsInput = {
    id?: string
    name: string
    gender: string
    dob: Date | string
    createdAt?: Date | string
    school: SchoolCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutExaminationsInput = {
    id?: string
    name: string
    gender: string
    dob: Date | string
    schoolId: string
    createdAt?: Date | string
  }

  export type StudentCreateOrConnectWithoutExaminationsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutExaminationsInput, StudentUncheckedCreateWithoutExaminationsInput>
  }

  export type ExaminationSessionCreateWithoutExaminationsInput = {
    id?: string
    year: number
    sessionName: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
  }

  export type ExaminationSessionUncheckedCreateWithoutExaminationsInput = {
    id?: string
    year: number
    sessionName: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
  }

  export type ExaminationSessionCreateOrConnectWithoutExaminationsInput = {
    where: ExaminationSessionWhereUniqueInput
    create: XOR<ExaminationSessionCreateWithoutExaminationsInput, ExaminationSessionUncheckedCreateWithoutExaminationsInput>
  }

  export type DiagnosisCreateWithoutExaminationInput = {
    id?: string
    severity?: string | null
    notes?: string | null
    disease: DiseaseCreateNestedOneWithoutDiagnosesInput
  }

  export type DiagnosisUncheckedCreateWithoutExaminationInput = {
    id?: string
    diseaseId: string
    severity?: string | null
    notes?: string | null
  }

  export type DiagnosisCreateOrConnectWithoutExaminationInput = {
    where: DiagnosisWhereUniqueInput
    create: XOR<DiagnosisCreateWithoutExaminationInput, DiagnosisUncheckedCreateWithoutExaminationInput>
  }

  export type DiagnosisCreateManyExaminationInputEnvelope = {
    data: DiagnosisCreateManyExaminationInput | DiagnosisCreateManyExaminationInput[]
  }

  export type StudentUpsertWithoutExaminationsInput = {
    update: XOR<StudentUpdateWithoutExaminationsInput, StudentUncheckedUpdateWithoutExaminationsInput>
    create: XOR<StudentCreateWithoutExaminationsInput, StudentUncheckedCreateWithoutExaminationsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutExaminationsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutExaminationsInput, StudentUncheckedUpdateWithoutExaminationsInput>
  }

  export type StudentUpdateWithoutExaminationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutExaminationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExaminationSessionUpsertWithoutExaminationsInput = {
    update: XOR<ExaminationSessionUpdateWithoutExaminationsInput, ExaminationSessionUncheckedUpdateWithoutExaminationsInput>
    create: XOR<ExaminationSessionCreateWithoutExaminationsInput, ExaminationSessionUncheckedCreateWithoutExaminationsInput>
    where?: ExaminationSessionWhereInput
  }

  export type ExaminationSessionUpdateToOneWithWhereWithoutExaminationsInput = {
    where?: ExaminationSessionWhereInput
    data: XOR<ExaminationSessionUpdateWithoutExaminationsInput, ExaminationSessionUncheckedUpdateWithoutExaminationsInput>
  }

  export type ExaminationSessionUpdateWithoutExaminationsInput = {
    year?: IntFieldUpdateOperationsInput | number
    sessionName?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExaminationSessionUncheckedUpdateWithoutExaminationsInput = {
    year?: IntFieldUpdateOperationsInput | number
    sessionName?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosisUpsertWithWhereUniqueWithoutExaminationInput = {
    where: DiagnosisWhereUniqueInput
    update: XOR<DiagnosisUpdateWithoutExaminationInput, DiagnosisUncheckedUpdateWithoutExaminationInput>
    create: XOR<DiagnosisCreateWithoutExaminationInput, DiagnosisUncheckedCreateWithoutExaminationInput>
  }

  export type DiagnosisUpdateWithWhereUniqueWithoutExaminationInput = {
    where: DiagnosisWhereUniqueInput
    data: XOR<DiagnosisUpdateWithoutExaminationInput, DiagnosisUncheckedUpdateWithoutExaminationInput>
  }

  export type DiagnosisUpdateManyWithWhereWithoutExaminationInput = {
    where: DiagnosisScalarWhereInput
    data: XOR<DiagnosisUpdateManyMutationInput, DiagnosisUncheckedUpdateManyWithoutExaminationInput>
  }

  export type DiagnosisScalarWhereInput = {
    AND?: DiagnosisScalarWhereInput | DiagnosisScalarWhereInput[]
    OR?: DiagnosisScalarWhereInput[]
    NOT?: DiagnosisScalarWhereInput | DiagnosisScalarWhereInput[]
    id?: StringFilter<"Diagnosis"> | string
    examinationId?: StringFilter<"Diagnosis"> | string
    diseaseId?: StringFilter<"Diagnosis"> | string
    severity?: StringNullableFilter<"Diagnosis"> | string | null
    notes?: StringNullableFilter<"Diagnosis"> | string | null
  }

  export type DiseaseCreateWithoutDiagnosisCategoryInput = {
    id?: string
    name: string
    diagnoses?: DiagnosisCreateNestedManyWithoutDiseaseInput
  }

  export type DiseaseUncheckedCreateWithoutDiagnosisCategoryInput = {
    id?: string
    name: string
    diagnoses?: DiagnosisUncheckedCreateNestedManyWithoutDiseaseInput
  }

  export type DiseaseCreateOrConnectWithoutDiagnosisCategoryInput = {
    where: DiseaseWhereUniqueInput
    create: XOR<DiseaseCreateWithoutDiagnosisCategoryInput, DiseaseUncheckedCreateWithoutDiagnosisCategoryInput>
  }

  export type DiseaseCreateManyDiagnosisCategoryInputEnvelope = {
    data: DiseaseCreateManyDiagnosisCategoryInput | DiseaseCreateManyDiagnosisCategoryInput[]
  }

  export type DiseaseUpsertWithWhereUniqueWithoutDiagnosisCategoryInput = {
    where: DiseaseWhereUniqueInput
    update: XOR<DiseaseUpdateWithoutDiagnosisCategoryInput, DiseaseUncheckedUpdateWithoutDiagnosisCategoryInput>
    create: XOR<DiseaseCreateWithoutDiagnosisCategoryInput, DiseaseUncheckedCreateWithoutDiagnosisCategoryInput>
  }

  export type DiseaseUpdateWithWhereUniqueWithoutDiagnosisCategoryInput = {
    where: DiseaseWhereUniqueInput
    data: XOR<DiseaseUpdateWithoutDiagnosisCategoryInput, DiseaseUncheckedUpdateWithoutDiagnosisCategoryInput>
  }

  export type DiseaseUpdateManyWithWhereWithoutDiagnosisCategoryInput = {
    where: DiseaseScalarWhereInput
    data: XOR<DiseaseUpdateManyMutationInput, DiseaseUncheckedUpdateManyWithoutDiagnosisCategoryInput>
  }

  export type DiseaseScalarWhereInput = {
    AND?: DiseaseScalarWhereInput | DiseaseScalarWhereInput[]
    OR?: DiseaseScalarWhereInput[]
    NOT?: DiseaseScalarWhereInput | DiseaseScalarWhereInput[]
    id?: StringFilter<"Disease"> | string
    name?: StringFilter<"Disease"> | string
    diagnosisCategoryId?: StringFilter<"Disease"> | string
  }

  export type DiagnosisCategoryCreateWithoutDiseasesInput = {
    id?: string
    name: string
  }

  export type DiagnosisCategoryUncheckedCreateWithoutDiseasesInput = {
    id?: string
    name: string
  }

  export type DiagnosisCategoryCreateOrConnectWithoutDiseasesInput = {
    where: DiagnosisCategoryWhereUniqueInput
    create: XOR<DiagnosisCategoryCreateWithoutDiseasesInput, DiagnosisCategoryUncheckedCreateWithoutDiseasesInput>
  }

  export type DiagnosisCreateWithoutDiseaseInput = {
    id?: string
    severity?: string | null
    notes?: string | null
    examination: ExaminationCreateNestedOneWithoutDiagnosesInput
  }

  export type DiagnosisUncheckedCreateWithoutDiseaseInput = {
    id?: string
    examinationId: string
    severity?: string | null
    notes?: string | null
  }

  export type DiagnosisCreateOrConnectWithoutDiseaseInput = {
    where: DiagnosisWhereUniqueInput
    create: XOR<DiagnosisCreateWithoutDiseaseInput, DiagnosisUncheckedCreateWithoutDiseaseInput>
  }

  export type DiagnosisCreateManyDiseaseInputEnvelope = {
    data: DiagnosisCreateManyDiseaseInput | DiagnosisCreateManyDiseaseInput[]
  }

  export type DiagnosisCategoryUpsertWithoutDiseasesInput = {
    update: XOR<DiagnosisCategoryUpdateWithoutDiseasesInput, DiagnosisCategoryUncheckedUpdateWithoutDiseasesInput>
    create: XOR<DiagnosisCategoryCreateWithoutDiseasesInput, DiagnosisCategoryUncheckedCreateWithoutDiseasesInput>
    where?: DiagnosisCategoryWhereInput
  }

  export type DiagnosisCategoryUpdateToOneWithWhereWithoutDiseasesInput = {
    where?: DiagnosisCategoryWhereInput
    data: XOR<DiagnosisCategoryUpdateWithoutDiseasesInput, DiagnosisCategoryUncheckedUpdateWithoutDiseasesInput>
  }

  export type DiagnosisCategoryUpdateWithoutDiseasesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosisCategoryUncheckedUpdateWithoutDiseasesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosisUpsertWithWhereUniqueWithoutDiseaseInput = {
    where: DiagnosisWhereUniqueInput
    update: XOR<DiagnosisUpdateWithoutDiseaseInput, DiagnosisUncheckedUpdateWithoutDiseaseInput>
    create: XOR<DiagnosisCreateWithoutDiseaseInput, DiagnosisUncheckedCreateWithoutDiseaseInput>
  }

  export type DiagnosisUpdateWithWhereUniqueWithoutDiseaseInput = {
    where: DiagnosisWhereUniqueInput
    data: XOR<DiagnosisUpdateWithoutDiseaseInput, DiagnosisUncheckedUpdateWithoutDiseaseInput>
  }

  export type DiagnosisUpdateManyWithWhereWithoutDiseaseInput = {
    where: DiagnosisScalarWhereInput
    data: XOR<DiagnosisUpdateManyMutationInput, DiagnosisUncheckedUpdateManyWithoutDiseaseInput>
  }

  export type ExaminationCreateWithoutDiagnosesInput = {
    id?: string
    date: Date | string
    student: StudentCreateNestedOneWithoutExaminationsInput
    session: ExaminationSessionCreateNestedOneWithoutExaminationsInput
  }

  export type ExaminationUncheckedCreateWithoutDiagnosesInput = {
    id?: string
    studentId: string
    sessionId: string
    date: Date | string
  }

  export type ExaminationCreateOrConnectWithoutDiagnosesInput = {
    where: ExaminationWhereUniqueInput
    create: XOR<ExaminationCreateWithoutDiagnosesInput, ExaminationUncheckedCreateWithoutDiagnosesInput>
  }

  export type DiseaseCreateWithoutDiagnosesInput = {
    id?: string
    name: string
    diagnosisCategory: DiagnosisCategoryCreateNestedOneWithoutDiseasesInput
  }

  export type DiseaseUncheckedCreateWithoutDiagnosesInput = {
    id?: string
    name: string
    diagnosisCategoryId: string
  }

  export type DiseaseCreateOrConnectWithoutDiagnosesInput = {
    where: DiseaseWhereUniqueInput
    create: XOR<DiseaseCreateWithoutDiagnosesInput, DiseaseUncheckedCreateWithoutDiagnosesInput>
  }

  export type ExaminationUpsertWithoutDiagnosesInput = {
    update: XOR<ExaminationUpdateWithoutDiagnosesInput, ExaminationUncheckedUpdateWithoutDiagnosesInput>
    create: XOR<ExaminationCreateWithoutDiagnosesInput, ExaminationUncheckedCreateWithoutDiagnosesInput>
    where?: ExaminationWhereInput
  }

  export type ExaminationUpdateToOneWithWhereWithoutDiagnosesInput = {
    where?: ExaminationWhereInput
    data: XOR<ExaminationUpdateWithoutDiagnosesInput, ExaminationUncheckedUpdateWithoutDiagnosesInput>
  }

  export type ExaminationUpdateWithoutDiagnosesInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutExaminationsNestedInput
    session?: ExaminationSessionUpdateOneRequiredWithoutExaminationsNestedInput
  }

  export type ExaminationUncheckedUpdateWithoutDiagnosesInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiseaseUpsertWithoutDiagnosesInput = {
    update: XOR<DiseaseUpdateWithoutDiagnosesInput, DiseaseUncheckedUpdateWithoutDiagnosesInput>
    create: XOR<DiseaseCreateWithoutDiagnosesInput, DiseaseUncheckedCreateWithoutDiagnosesInput>
    where?: DiseaseWhereInput
  }

  export type DiseaseUpdateToOneWithWhereWithoutDiagnosesInput = {
    where?: DiseaseWhereInput
    data: XOR<DiseaseUpdateWithoutDiagnosesInput, DiseaseUncheckedUpdateWithoutDiagnosesInput>
  }

  export type DiseaseUpdateWithoutDiagnosesInput = {
    name?: StringFieldUpdateOperationsInput | string
    diagnosisCategory?: DiagnosisCategoryUpdateOneRequiredWithoutDiseasesNestedInput
  }

  export type DiseaseUncheckedUpdateWithoutDiagnosesInput = {
    name?: StringFieldUpdateOperationsInput | string
    diagnosisCategoryId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateManySchoolInput = {
    id?: string
    name: string
    gender: string
    dob: Date | string
    createdAt?: Date | string
  }

  export type StudentUpdateWithoutSchoolInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examinations?: ExaminationUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSchoolInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examinations?: ExaminationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutSchoolInput = {
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExaminationCreateManyStudentInput = {
    id?: string
    sessionId: string
    date: Date | string
  }

  export type ExaminationUpdateWithoutStudentInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: ExaminationSessionUpdateOneRequiredWithoutExaminationsNestedInput
    diagnoses?: DiagnosisUpdateManyWithoutExaminationNestedInput
  }

  export type ExaminationUncheckedUpdateWithoutStudentInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnoses?: DiagnosisUncheckedUpdateManyWithoutExaminationNestedInput
  }

  export type ExaminationUncheckedUpdateManyWithoutStudentInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExaminationCreateManySessionInput = {
    id?: string
    studentId: string
    date: Date | string
  }

  export type ExaminationUpdateWithoutSessionInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutExaminationsNestedInput
    diagnoses?: DiagnosisUpdateManyWithoutExaminationNestedInput
  }

  export type ExaminationUncheckedUpdateWithoutSessionInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnoses?: DiagnosisUncheckedUpdateManyWithoutExaminationNestedInput
  }

  export type ExaminationUncheckedUpdateManyWithoutSessionInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosisCreateManyExaminationInput = {
    id?: string
    diseaseId: string
    severity?: string | null
    notes?: string | null
  }

  export type DiagnosisUpdateWithoutExaminationInput = {
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    disease?: DiseaseUpdateOneRequiredWithoutDiagnosesNestedInput
  }

  export type DiagnosisUncheckedUpdateWithoutExaminationInput = {
    diseaseId?: StringFieldUpdateOperationsInput | string
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiagnosisUncheckedUpdateManyWithoutExaminationInput = {
    diseaseId?: StringFieldUpdateOperationsInput | string
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiseaseCreateManyDiagnosisCategoryInput = {
    id?: string
    name: string
  }

  export type DiseaseUpdateWithoutDiagnosisCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    diagnoses?: DiagnosisUpdateManyWithoutDiseaseNestedInput
  }

  export type DiseaseUncheckedUpdateWithoutDiagnosisCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    diagnoses?: DiagnosisUncheckedUpdateManyWithoutDiseaseNestedInput
  }

  export type DiseaseUncheckedUpdateManyWithoutDiagnosisCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosisCreateManyDiseaseInput = {
    id?: string
    examinationId: string
    severity?: string | null
    notes?: string | null
  }

  export type DiagnosisUpdateWithoutDiseaseInput = {
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    examination?: ExaminationUpdateOneRequiredWithoutDiagnosesNestedInput
  }

  export type DiagnosisUncheckedUpdateWithoutDiseaseInput = {
    examinationId?: StringFieldUpdateOperationsInput | string
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiagnosisUncheckedUpdateManyWithoutDiseaseInput = {
    examinationId?: StringFieldUpdateOperationsInput | string
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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