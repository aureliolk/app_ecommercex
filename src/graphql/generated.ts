import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

export type Alimento = Node & {
  __typename?: 'Alimento';
  aEstearico?: Maybe<Scalars['String']>;
  aLinoleico?: Maybe<Scalars['String']>;
  aLinolenico?: Maybe<Scalars['String']>;
  aOleico?: Maybe<Scalars['String']>;
  aPalmitico?: Maybe<Scalars['String']>;
  aminograma?: Maybe<Scalars['String']>;
  arginina?: Maybe<Scalars['String']>;
  ca?: Maybe<Scalars['String']>;
  colSCheia?: Maybe<Scalars['String']>;
  colest?: Maybe<Scalars['String']>;
  colherDeSobremesa?: Maybe<Scalars['String']>;
  colherDeSopa?: Maybe<Scalars['String']>;
  copoDuplo?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  cu?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Alimento>;
  fe?: Maybe<Scalars['String']>;
  fenilalanina?: Maybe<Scalars['String']>;
  fibra?: Maybe<Scalars['String']>;
  fol?: Maybe<Scalars['String']>;
  gMono?: Maybe<Scalars['String']>;
  gPoli?: Maybe<Scalars['String']>;
  gSat?: Maybe<Scalars['String']>;
  gTot?: Maybe<Scalars['String']>;
  gTrans?: Maybe<Scalars['String']>;
  gramas?: Maybe<Scalars['String']>;
  histidina?: Maybe<Scalars['String']>;
  /** List of Alimento versions */
  history: Array<Version>;
  i?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  isoleucina?: Maybe<Scalars['String']>;
  k?: Maybe<Scalars['String']>;
  kcal?: Maybe<Scalars['String']>;
  lisina?: Maybe<Scalars['String']>;
  metionina?: Maybe<Scalars['String']>;
  mg?: Maybe<Scalars['String']>;
  mn?: Maybe<Scalars['String']>;
  na?: Maybe<Scalars['String']>;
  nia?: Maybe<Scalars['String']>;
  nome: Scalars['String'];
  p?: Maybe<Scalars['String']>;
  pant?: Maybe<Scalars['String']>;
  prot?: Maybe<Scalars['String']>;
  ptFundo?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  se?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  tirosina?: Maybe<Scalars['String']>;
  treonina?: Maybe<Scalars['String']>;
  triptofano?: Maybe<Scalars['String']>;
  unidG?: Maybe<Scalars['String']>;
  unidM?: Maybe<Scalars['String']>;
  unidP?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  valina?: Maybe<Scalars['String']>;
  vitA?: Maybe<Scalars['String']>;
  vitB1?: Maybe<Scalars['String']>;
  vitB2?: Maybe<Scalars['String']>;
  vitB6?: Maybe<Scalars['String']>;
  vitB12?: Maybe<Scalars['String']>;
  vitC?: Maybe<Scalars['String']>;
  vitD?: Maybe<Scalars['String']>;
  vitE?: Maybe<Scalars['String']>;
  zn?: Maybe<Scalars['String']>;
};


export type AlimentoCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type AlimentoDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type AlimentoHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type AlimentoPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type AlimentoScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type AlimentoUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type AlimentoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AlimentoWhereUniqueInput;
};

/** A connection to a list of items. */
export type AlimentoConnection = {
  __typename?: 'AlimentoConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AlimentoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AlimentoCreateInput = {
  aEstearico?: InputMaybe<Scalars['String']>;
  aLinoleico?: InputMaybe<Scalars['String']>;
  aLinolenico?: InputMaybe<Scalars['String']>;
  aOleico?: InputMaybe<Scalars['String']>;
  aPalmitico?: InputMaybe<Scalars['String']>;
  aminograma?: InputMaybe<Scalars['String']>;
  arginina?: InputMaybe<Scalars['String']>;
  ca?: InputMaybe<Scalars['String']>;
  cl9q00zn10c8t01t6c24xca1k?: InputMaybe<SubscriberCreateManyInlineInput>;
  colSCheia?: InputMaybe<Scalars['String']>;
  colest?: InputMaybe<Scalars['String']>;
  colherDeSobremesa?: InputMaybe<Scalars['String']>;
  colherDeSopa?: InputMaybe<Scalars['String']>;
  copoDuplo?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  cu?: InputMaybe<Scalars['String']>;
  fe?: InputMaybe<Scalars['String']>;
  fenilalanina?: InputMaybe<Scalars['String']>;
  fibra?: InputMaybe<Scalars['String']>;
  fol?: InputMaybe<Scalars['String']>;
  gMono?: InputMaybe<Scalars['String']>;
  gPoli?: InputMaybe<Scalars['String']>;
  gSat?: InputMaybe<Scalars['String']>;
  gTot?: InputMaybe<Scalars['String']>;
  gTrans?: InputMaybe<Scalars['String']>;
  gramas?: InputMaybe<Scalars['String']>;
  histidina?: InputMaybe<Scalars['String']>;
  i?: InputMaybe<Scalars['String']>;
  isoleucina?: InputMaybe<Scalars['String']>;
  k?: InputMaybe<Scalars['String']>;
  kcal?: InputMaybe<Scalars['String']>;
  lisina?: InputMaybe<Scalars['String']>;
  metionina?: InputMaybe<Scalars['String']>;
  mg?: InputMaybe<Scalars['String']>;
  mn?: InputMaybe<Scalars['String']>;
  na?: InputMaybe<Scalars['String']>;
  nia?: InputMaybe<Scalars['String']>;
  nome: Scalars['String'];
  p?: InputMaybe<Scalars['String']>;
  pant?: InputMaybe<Scalars['String']>;
  prot?: InputMaybe<Scalars['String']>;
  ptFundo?: InputMaybe<Scalars['String']>;
  se?: InputMaybe<Scalars['String']>;
  tirosina?: InputMaybe<Scalars['String']>;
  treonina?: InputMaybe<Scalars['String']>;
  triptofano?: InputMaybe<Scalars['String']>;
  unidG?: InputMaybe<Scalars['String']>;
  unidM?: InputMaybe<Scalars['String']>;
  unidP?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  valina?: InputMaybe<Scalars['String']>;
  vitA?: InputMaybe<Scalars['String']>;
  vitB1?: InputMaybe<Scalars['String']>;
  vitB2?: InputMaybe<Scalars['String']>;
  vitB6?: InputMaybe<Scalars['String']>;
  vitB12?: InputMaybe<Scalars['String']>;
  vitC?: InputMaybe<Scalars['String']>;
  vitD?: InputMaybe<Scalars['String']>;
  vitE?: InputMaybe<Scalars['String']>;
  zn?: InputMaybe<Scalars['String']>;
};

export type AlimentoCreateManyInlineInput = {
  /** Connect multiple existing Alimento documents */
  connect?: InputMaybe<Array<AlimentoWhereUniqueInput>>;
  /** Create and connect multiple existing Alimento documents */
  create?: InputMaybe<Array<AlimentoCreateInput>>;
};

export type AlimentoCreateOneInlineInput = {
  /** Connect one existing Alimento document */
  connect?: InputMaybe<AlimentoWhereUniqueInput>;
  /** Create and connect one Alimento document */
  create?: InputMaybe<AlimentoCreateInput>;
};

/** An edge in a connection. */
export type AlimentoEdge = {
  __typename?: 'AlimentoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Alimento;
};

/** Identifies documents */
export type AlimentoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AlimentoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AlimentoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AlimentoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  aEstearico?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  aEstearico_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  aEstearico_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  aEstearico_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  aEstearico_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  aEstearico_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  aEstearico_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  aEstearico_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  aEstearico_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  aEstearico_starts_with?: InputMaybe<Scalars['String']>;
  aLinoleico?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  aLinoleico_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  aLinoleico_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  aLinoleico_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  aLinoleico_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  aLinoleico_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  aLinoleico_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  aLinoleico_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  aLinoleico_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  aLinoleico_starts_with?: InputMaybe<Scalars['String']>;
  aLinolenico?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  aLinolenico_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  aLinolenico_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  aLinolenico_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  aLinolenico_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  aLinolenico_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  aLinolenico_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  aLinolenico_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  aLinolenico_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  aLinolenico_starts_with?: InputMaybe<Scalars['String']>;
  aOleico?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  aOleico_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  aOleico_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  aOleico_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  aOleico_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  aOleico_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  aOleico_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  aOleico_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  aOleico_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  aOleico_starts_with?: InputMaybe<Scalars['String']>;
  aPalmitico?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  aPalmitico_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  aPalmitico_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  aPalmitico_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  aPalmitico_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  aPalmitico_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  aPalmitico_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  aPalmitico_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  aPalmitico_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  aPalmitico_starts_with?: InputMaybe<Scalars['String']>;
  aminograma?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  aminograma_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  aminograma_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  aminograma_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  aminograma_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  aminograma_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  aminograma_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  aminograma_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  aminograma_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  aminograma_starts_with?: InputMaybe<Scalars['String']>;
  arginina?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  arginina_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  arginina_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  arginina_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  arginina_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  arginina_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  arginina_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  arginina_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  arginina_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  arginina_starts_with?: InputMaybe<Scalars['String']>;
  ca?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  ca_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  ca_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ca_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  ca_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  ca_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  ca_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  ca_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  ca_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  ca_starts_with?: InputMaybe<Scalars['String']>;
  colSCheia?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  colSCheia_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  colSCheia_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  colSCheia_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  colSCheia_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  colSCheia_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  colSCheia_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  colSCheia_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  colSCheia_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  colSCheia_starts_with?: InputMaybe<Scalars['String']>;
  colest?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  colest_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  colest_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  colest_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  colest_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  colest_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  colest_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  colest_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  colest_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  colest_starts_with?: InputMaybe<Scalars['String']>;
  colherDeSobremesa?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  colherDeSobremesa_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  colherDeSobremesa_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  colherDeSobremesa_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  colherDeSobremesa_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  colherDeSobremesa_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  colherDeSobremesa_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  colherDeSobremesa_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  colherDeSobremesa_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  colherDeSobremesa_starts_with?: InputMaybe<Scalars['String']>;
  colherDeSopa?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  colherDeSopa_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  colherDeSopa_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  colherDeSopa_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  colherDeSopa_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  colherDeSopa_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  colherDeSopa_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  colherDeSopa_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  colherDeSopa_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  colherDeSopa_starts_with?: InputMaybe<Scalars['String']>;
  copoDuplo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  copoDuplo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  copoDuplo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  copoDuplo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  copoDuplo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  copoDuplo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  copoDuplo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  copoDuplo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  copoDuplo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  copoDuplo_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  cu?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  cu_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  cu_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  cu_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  cu_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  cu_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  cu_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  cu_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  cu_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  cu_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<AlimentoWhereStageInput>;
  documentInStages_none?: InputMaybe<AlimentoWhereStageInput>;
  documentInStages_some?: InputMaybe<AlimentoWhereStageInput>;
  fe?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fe_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fe_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fe_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  fe_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fe_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fe_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fe_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fe_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fe_starts_with?: InputMaybe<Scalars['String']>;
  fenilalanina?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fenilalanina_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fenilalanina_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fenilalanina_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  fenilalanina_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fenilalanina_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fenilalanina_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fenilalanina_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fenilalanina_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fenilalanina_starts_with?: InputMaybe<Scalars['String']>;
  fibra?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fibra_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fibra_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fibra_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  fibra_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fibra_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fibra_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fibra_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fibra_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fibra_starts_with?: InputMaybe<Scalars['String']>;
  fol?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fol_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fol_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fol_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  fol_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fol_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fol_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fol_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fol_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fol_starts_with?: InputMaybe<Scalars['String']>;
  gMono?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  gMono_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  gMono_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  gMono_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  gMono_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  gMono_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  gMono_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  gMono_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  gMono_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  gMono_starts_with?: InputMaybe<Scalars['String']>;
  gPoli?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  gPoli_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  gPoli_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  gPoli_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  gPoli_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  gPoli_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  gPoli_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  gPoli_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  gPoli_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  gPoli_starts_with?: InputMaybe<Scalars['String']>;
  gSat?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  gSat_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  gSat_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  gSat_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  gSat_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  gSat_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  gSat_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  gSat_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  gSat_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  gSat_starts_with?: InputMaybe<Scalars['String']>;
  gTot?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  gTot_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  gTot_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  gTot_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  gTot_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  gTot_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  gTot_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  gTot_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  gTot_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  gTot_starts_with?: InputMaybe<Scalars['String']>;
  gTrans?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  gTrans_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  gTrans_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  gTrans_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  gTrans_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  gTrans_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  gTrans_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  gTrans_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  gTrans_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  gTrans_starts_with?: InputMaybe<Scalars['String']>;
  gramas?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  gramas_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  gramas_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  gramas_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  gramas_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  gramas_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  gramas_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  gramas_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  gramas_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  gramas_starts_with?: InputMaybe<Scalars['String']>;
  histidina?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  histidina_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  histidina_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  histidina_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  histidina_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  histidina_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  histidina_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  histidina_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  histidina_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  histidina_starts_with?: InputMaybe<Scalars['String']>;
  i?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  i_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  i_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  i_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  i_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  i_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  i_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  i_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  i_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  i_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isoleucina?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  isoleucina_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  isoleucina_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  isoleucina_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  isoleucina_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  isoleucina_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  isoleucina_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  isoleucina_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  isoleucina_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  isoleucina_starts_with?: InputMaybe<Scalars['String']>;
  k?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  k_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  k_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  k_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  k_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  k_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  k_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  k_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  k_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  k_starts_with?: InputMaybe<Scalars['String']>;
  kcal?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  kcal_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  kcal_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  kcal_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  kcal_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  kcal_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  kcal_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  kcal_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  kcal_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  kcal_starts_with?: InputMaybe<Scalars['String']>;
  lisina?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  lisina_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  lisina_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lisina_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  lisina_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  lisina_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  lisina_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  lisina_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  lisina_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  lisina_starts_with?: InputMaybe<Scalars['String']>;
  metionina?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  metionina_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  metionina_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metionina_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  metionina_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  metionina_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  metionina_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metionina_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  metionina_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  metionina_starts_with?: InputMaybe<Scalars['String']>;
  mg?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mg_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mg_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mg_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  mg_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mg_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mg_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mg_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mg_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mg_starts_with?: InputMaybe<Scalars['String']>;
  mn?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mn_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mn_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mn_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  mn_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mn_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mn_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mn_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mn_starts_with?: InputMaybe<Scalars['String']>;
  na?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  na_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  na_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  na_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  na_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  na_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  na_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  na_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  na_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  na_starts_with?: InputMaybe<Scalars['String']>;
  nia?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  nia_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  nia_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nia_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  nia_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  nia_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  nia_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  nia_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  nia_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  nia_starts_with?: InputMaybe<Scalars['String']>;
  nome?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  nome_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  nome_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nome_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  nome_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  nome_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  nome_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  nome_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  nome_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  nome_starts_with?: InputMaybe<Scalars['String']>;
  p?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  p_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  p_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  p_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  p_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  p_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  p_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  p_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  p_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  p_starts_with?: InputMaybe<Scalars['String']>;
  pant?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pant_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pant_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pant_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  pant_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pant_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pant_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pant_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pant_starts_with?: InputMaybe<Scalars['String']>;
  prot?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  prot_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  prot_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  prot_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  prot_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  prot_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  prot_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  prot_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  prot_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  prot_starts_with?: InputMaybe<Scalars['String']>;
  ptFundo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  ptFundo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  ptFundo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ptFundo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  ptFundo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  ptFundo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  ptFundo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  ptFundo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  ptFundo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  ptFundo_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  se?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  se_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  se_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  se_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  se_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  se_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  se_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  se_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  se_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  se_starts_with?: InputMaybe<Scalars['String']>;
  tirosina?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  tirosina_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  tirosina_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  tirosina_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  tirosina_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  tirosina_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  tirosina_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  tirosina_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  tirosina_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  tirosina_starts_with?: InputMaybe<Scalars['String']>;
  treonina?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  treonina_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  treonina_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  treonina_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  treonina_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  treonina_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  treonina_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  treonina_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  treonina_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  treonina_starts_with?: InputMaybe<Scalars['String']>;
  triptofano?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  triptofano_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  triptofano_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  triptofano_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  triptofano_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  triptofano_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  triptofano_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  triptofano_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  triptofano_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  triptofano_starts_with?: InputMaybe<Scalars['String']>;
  unidG?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  unidG_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  unidG_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  unidG_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  unidG_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  unidG_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  unidG_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  unidG_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  unidG_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  unidG_starts_with?: InputMaybe<Scalars['String']>;
  unidM?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  unidM_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  unidM_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  unidM_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  unidM_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  unidM_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  unidM_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  unidM_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  unidM_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  unidM_starts_with?: InputMaybe<Scalars['String']>;
  unidP?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  unidP_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  unidP_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  unidP_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  unidP_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  unidP_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  unidP_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  unidP_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  unidP_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  unidP_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  valina?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  valina_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  valina_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  valina_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  valina_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  valina_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  valina_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  valina_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  valina_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  valina_starts_with?: InputMaybe<Scalars['String']>;
  vitA?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  vitA_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  vitA_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  vitA_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  vitA_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  vitA_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  vitA_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  vitA_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  vitA_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  vitA_starts_with?: InputMaybe<Scalars['String']>;
  vitB1?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  vitB1_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  vitB1_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  vitB1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  vitB1_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  vitB1_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  vitB1_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  vitB1_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  vitB1_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  vitB1_starts_with?: InputMaybe<Scalars['String']>;
  vitB2?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  vitB2_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  vitB2_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  vitB2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  vitB2_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  vitB2_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  vitB2_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  vitB2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  vitB2_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  vitB2_starts_with?: InputMaybe<Scalars['String']>;
  vitB6?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  vitB6_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  vitB6_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  vitB6_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  vitB6_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  vitB6_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  vitB6_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  vitB6_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  vitB6_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  vitB6_starts_with?: InputMaybe<Scalars['String']>;
  vitB12?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  vitB12_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  vitB12_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  vitB12_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  vitB12_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  vitB12_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  vitB12_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  vitB12_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  vitB12_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  vitB12_starts_with?: InputMaybe<Scalars['String']>;
  vitC?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  vitC_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  vitC_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  vitC_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  vitC_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  vitC_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  vitC_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  vitC_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  vitC_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  vitC_starts_with?: InputMaybe<Scalars['String']>;
  vitD?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  vitD_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  vitD_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  vitD_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  vitD_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  vitD_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  vitD_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  vitD_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  vitD_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  vitD_starts_with?: InputMaybe<Scalars['String']>;
  vitE?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  vitE_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  vitE_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  vitE_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  vitE_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  vitE_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  vitE_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  vitE_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  vitE_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  vitE_starts_with?: InputMaybe<Scalars['String']>;
  zn?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  zn_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  zn_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  zn_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  zn_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  zn_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  zn_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  zn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  zn_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  zn_starts_with?: InputMaybe<Scalars['String']>;
};

export enum AlimentoOrderByInput {
  AEstearicoAsc = 'aEstearico_ASC',
  AEstearicoDesc = 'aEstearico_DESC',
  ALinoleicoAsc = 'aLinoleico_ASC',
  ALinoleicoDesc = 'aLinoleico_DESC',
  ALinolenicoAsc = 'aLinolenico_ASC',
  ALinolenicoDesc = 'aLinolenico_DESC',
  AOleicoAsc = 'aOleico_ASC',
  AOleicoDesc = 'aOleico_DESC',
  APalmiticoAsc = 'aPalmitico_ASC',
  APalmiticoDesc = 'aPalmitico_DESC',
  AminogramaAsc = 'aminograma_ASC',
  AminogramaDesc = 'aminograma_DESC',
  ArgininaAsc = 'arginina_ASC',
  ArgininaDesc = 'arginina_DESC',
  CaAsc = 'ca_ASC',
  CaDesc = 'ca_DESC',
  ColSCheiaAsc = 'colSCheia_ASC',
  ColSCheiaDesc = 'colSCheia_DESC',
  ColestAsc = 'colest_ASC',
  ColestDesc = 'colest_DESC',
  ColherDeSobremesaAsc = 'colherDeSobremesa_ASC',
  ColherDeSobremesaDesc = 'colherDeSobremesa_DESC',
  ColherDeSopaAsc = 'colherDeSopa_ASC',
  ColherDeSopaDesc = 'colherDeSopa_DESC',
  CopoDuploAsc = 'copoDuplo_ASC',
  CopoDuploDesc = 'copoDuplo_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CuAsc = 'cu_ASC',
  CuDesc = 'cu_DESC',
  FeAsc = 'fe_ASC',
  FeDesc = 'fe_DESC',
  FenilalaninaAsc = 'fenilalanina_ASC',
  FenilalaninaDesc = 'fenilalanina_DESC',
  FibraAsc = 'fibra_ASC',
  FibraDesc = 'fibra_DESC',
  FolAsc = 'fol_ASC',
  FolDesc = 'fol_DESC',
  GMonoAsc = 'gMono_ASC',
  GMonoDesc = 'gMono_DESC',
  GPoliAsc = 'gPoli_ASC',
  GPoliDesc = 'gPoli_DESC',
  GSatAsc = 'gSat_ASC',
  GSatDesc = 'gSat_DESC',
  GTotAsc = 'gTot_ASC',
  GTotDesc = 'gTot_DESC',
  GTransAsc = 'gTrans_ASC',
  GTransDesc = 'gTrans_DESC',
  GramasAsc = 'gramas_ASC',
  GramasDesc = 'gramas_DESC',
  HistidinaAsc = 'histidina_ASC',
  HistidinaDesc = 'histidina_DESC',
  IAsc = 'i_ASC',
  IDesc = 'i_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsoleucinaAsc = 'isoleucina_ASC',
  IsoleucinaDesc = 'isoleucina_DESC',
  KAsc = 'k_ASC',
  KDesc = 'k_DESC',
  KcalAsc = 'kcal_ASC',
  KcalDesc = 'kcal_DESC',
  LisinaAsc = 'lisina_ASC',
  LisinaDesc = 'lisina_DESC',
  MetioninaAsc = 'metionina_ASC',
  MetioninaDesc = 'metionina_DESC',
  MgAsc = 'mg_ASC',
  MgDesc = 'mg_DESC',
  MnAsc = 'mn_ASC',
  MnDesc = 'mn_DESC',
  NaAsc = 'na_ASC',
  NaDesc = 'na_DESC',
  NiaAsc = 'nia_ASC',
  NiaDesc = 'nia_DESC',
  NomeAsc = 'nome_ASC',
  NomeDesc = 'nome_DESC',
  PAsc = 'p_ASC',
  PDesc = 'p_DESC',
  PantAsc = 'pant_ASC',
  PantDesc = 'pant_DESC',
  ProtAsc = 'prot_ASC',
  ProtDesc = 'prot_DESC',
  PtFundoAsc = 'ptFundo_ASC',
  PtFundoDesc = 'ptFundo_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SeAsc = 'se_ASC',
  SeDesc = 'se_DESC',
  TirosinaAsc = 'tirosina_ASC',
  TirosinaDesc = 'tirosina_DESC',
  TreoninaAsc = 'treonina_ASC',
  TreoninaDesc = 'treonina_DESC',
  TriptofanoAsc = 'triptofano_ASC',
  TriptofanoDesc = 'triptofano_DESC',
  UnidGAsc = 'unidG_ASC',
  UnidGDesc = 'unidG_DESC',
  UnidMAsc = 'unidM_ASC',
  UnidMDesc = 'unidM_DESC',
  UnidPAsc = 'unidP_ASC',
  UnidPDesc = 'unidP_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValinaAsc = 'valina_ASC',
  ValinaDesc = 'valina_DESC',
  VitAAsc = 'vitA_ASC',
  VitADesc = 'vitA_DESC',
  VitB1Asc = 'vitB1_ASC',
  VitB1Desc = 'vitB1_DESC',
  VitB2Asc = 'vitB2_ASC',
  VitB2Desc = 'vitB2_DESC',
  VitB6Asc = 'vitB6_ASC',
  VitB6Desc = 'vitB6_DESC',
  VitB12Asc = 'vitB12_ASC',
  VitB12Desc = 'vitB12_DESC',
  VitCAsc = 'vitC_ASC',
  VitCDesc = 'vitC_DESC',
  VitDAsc = 'vitD_ASC',
  VitDDesc = 'vitD_DESC',
  VitEAsc = 'vitE_ASC',
  VitEDesc = 'vitE_DESC',
  ZnAsc = 'zn_ASC',
  ZnDesc = 'zn_DESC'
}

export type AlimentoUpdateInput = {
  aEstearico?: InputMaybe<Scalars['String']>;
  aLinoleico?: InputMaybe<Scalars['String']>;
  aLinolenico?: InputMaybe<Scalars['String']>;
  aOleico?: InputMaybe<Scalars['String']>;
  aPalmitico?: InputMaybe<Scalars['String']>;
  aminograma?: InputMaybe<Scalars['String']>;
  arginina?: InputMaybe<Scalars['String']>;
  ca?: InputMaybe<Scalars['String']>;
  cl9q00zn10c8t01t6c24xca1k?: InputMaybe<SubscriberUpdateManyInlineInput>;
  colSCheia?: InputMaybe<Scalars['String']>;
  colest?: InputMaybe<Scalars['String']>;
  colherDeSobremesa?: InputMaybe<Scalars['String']>;
  colherDeSopa?: InputMaybe<Scalars['String']>;
  copoDuplo?: InputMaybe<Scalars['String']>;
  cu?: InputMaybe<Scalars['String']>;
  fe?: InputMaybe<Scalars['String']>;
  fenilalanina?: InputMaybe<Scalars['String']>;
  fibra?: InputMaybe<Scalars['String']>;
  fol?: InputMaybe<Scalars['String']>;
  gMono?: InputMaybe<Scalars['String']>;
  gPoli?: InputMaybe<Scalars['String']>;
  gSat?: InputMaybe<Scalars['String']>;
  gTot?: InputMaybe<Scalars['String']>;
  gTrans?: InputMaybe<Scalars['String']>;
  gramas?: InputMaybe<Scalars['String']>;
  histidina?: InputMaybe<Scalars['String']>;
  i?: InputMaybe<Scalars['String']>;
  isoleucina?: InputMaybe<Scalars['String']>;
  k?: InputMaybe<Scalars['String']>;
  kcal?: InputMaybe<Scalars['String']>;
  lisina?: InputMaybe<Scalars['String']>;
  metionina?: InputMaybe<Scalars['String']>;
  mg?: InputMaybe<Scalars['String']>;
  mn?: InputMaybe<Scalars['String']>;
  na?: InputMaybe<Scalars['String']>;
  nia?: InputMaybe<Scalars['String']>;
  nome?: InputMaybe<Scalars['String']>;
  p?: InputMaybe<Scalars['String']>;
  pant?: InputMaybe<Scalars['String']>;
  prot?: InputMaybe<Scalars['String']>;
  ptFundo?: InputMaybe<Scalars['String']>;
  se?: InputMaybe<Scalars['String']>;
  tirosina?: InputMaybe<Scalars['String']>;
  treonina?: InputMaybe<Scalars['String']>;
  triptofano?: InputMaybe<Scalars['String']>;
  unidG?: InputMaybe<Scalars['String']>;
  unidM?: InputMaybe<Scalars['String']>;
  unidP?: InputMaybe<Scalars['String']>;
  valina?: InputMaybe<Scalars['String']>;
  vitA?: InputMaybe<Scalars['String']>;
  vitB1?: InputMaybe<Scalars['String']>;
  vitB2?: InputMaybe<Scalars['String']>;
  vitB6?: InputMaybe<Scalars['String']>;
  vitB12?: InputMaybe<Scalars['String']>;
  vitC?: InputMaybe<Scalars['String']>;
  vitD?: InputMaybe<Scalars['String']>;
  vitE?: InputMaybe<Scalars['String']>;
  zn?: InputMaybe<Scalars['String']>;
};

export type AlimentoUpdateManyInlineInput = {
  /** Connect multiple existing Alimento documents */
  connect?: InputMaybe<Array<AlimentoConnectInput>>;
  /** Create and connect multiple Alimento documents */
  create?: InputMaybe<Array<AlimentoCreateInput>>;
  /** Delete multiple Alimento documents */
  delete?: InputMaybe<Array<AlimentoWhereUniqueInput>>;
  /** Disconnect multiple Alimento documents */
  disconnect?: InputMaybe<Array<AlimentoWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Alimento documents */
  set?: InputMaybe<Array<AlimentoWhereUniqueInput>>;
  /** Update multiple Alimento documents */
  update?: InputMaybe<Array<AlimentoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Alimento documents */
  upsert?: InputMaybe<Array<AlimentoUpsertWithNestedWhereUniqueInput>>;
};

export type AlimentoUpdateManyInput = {
  aEstearico?: InputMaybe<Scalars['String']>;
  aLinoleico?: InputMaybe<Scalars['String']>;
  aLinolenico?: InputMaybe<Scalars['String']>;
  aOleico?: InputMaybe<Scalars['String']>;
  aPalmitico?: InputMaybe<Scalars['String']>;
  aminograma?: InputMaybe<Scalars['String']>;
  arginina?: InputMaybe<Scalars['String']>;
  ca?: InputMaybe<Scalars['String']>;
  colSCheia?: InputMaybe<Scalars['String']>;
  colest?: InputMaybe<Scalars['String']>;
  colherDeSobremesa?: InputMaybe<Scalars['String']>;
  colherDeSopa?: InputMaybe<Scalars['String']>;
  copoDuplo?: InputMaybe<Scalars['String']>;
  cu?: InputMaybe<Scalars['String']>;
  fe?: InputMaybe<Scalars['String']>;
  fenilalanina?: InputMaybe<Scalars['String']>;
  fibra?: InputMaybe<Scalars['String']>;
  fol?: InputMaybe<Scalars['String']>;
  gMono?: InputMaybe<Scalars['String']>;
  gPoli?: InputMaybe<Scalars['String']>;
  gSat?: InputMaybe<Scalars['String']>;
  gTot?: InputMaybe<Scalars['String']>;
  gTrans?: InputMaybe<Scalars['String']>;
  gramas?: InputMaybe<Scalars['String']>;
  histidina?: InputMaybe<Scalars['String']>;
  i?: InputMaybe<Scalars['String']>;
  isoleucina?: InputMaybe<Scalars['String']>;
  k?: InputMaybe<Scalars['String']>;
  kcal?: InputMaybe<Scalars['String']>;
  lisina?: InputMaybe<Scalars['String']>;
  metionina?: InputMaybe<Scalars['String']>;
  mg?: InputMaybe<Scalars['String']>;
  mn?: InputMaybe<Scalars['String']>;
  na?: InputMaybe<Scalars['String']>;
  nia?: InputMaybe<Scalars['String']>;
  nome?: InputMaybe<Scalars['String']>;
  p?: InputMaybe<Scalars['String']>;
  pant?: InputMaybe<Scalars['String']>;
  prot?: InputMaybe<Scalars['String']>;
  ptFundo?: InputMaybe<Scalars['String']>;
  se?: InputMaybe<Scalars['String']>;
  tirosina?: InputMaybe<Scalars['String']>;
  treonina?: InputMaybe<Scalars['String']>;
  triptofano?: InputMaybe<Scalars['String']>;
  unidG?: InputMaybe<Scalars['String']>;
  unidM?: InputMaybe<Scalars['String']>;
  unidP?: InputMaybe<Scalars['String']>;
  valina?: InputMaybe<Scalars['String']>;
  vitA?: InputMaybe<Scalars['String']>;
  vitB1?: InputMaybe<Scalars['String']>;
  vitB2?: InputMaybe<Scalars['String']>;
  vitB6?: InputMaybe<Scalars['String']>;
  vitB12?: InputMaybe<Scalars['String']>;
  vitC?: InputMaybe<Scalars['String']>;
  vitD?: InputMaybe<Scalars['String']>;
  vitE?: InputMaybe<Scalars['String']>;
  zn?: InputMaybe<Scalars['String']>;
};

export type AlimentoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AlimentoUpdateManyInput;
  /** Document search */
  where: AlimentoWhereInput;
};

export type AlimentoUpdateOneInlineInput = {
  /** Connect existing Alimento document */
  connect?: InputMaybe<AlimentoWhereUniqueInput>;
  /** Create and connect one Alimento document */
  create?: InputMaybe<AlimentoCreateInput>;
  /** Delete currently connected Alimento document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Alimento document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Alimento document */
  update?: InputMaybe<AlimentoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Alimento document */
  upsert?: InputMaybe<AlimentoUpsertWithNestedWhereUniqueInput>;
};

export type AlimentoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AlimentoUpdateInput;
  /** Unique document search */
  where: AlimentoWhereUniqueInput;
};

export type AlimentoUpsertInput = {
  /** Create document if it didn't exist */
  create: AlimentoCreateInput;
  /** Update document if it exists */
  update: AlimentoUpdateInput;
};

export type AlimentoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AlimentoUpsertInput;
  /** Unique document search */
  where: AlimentoWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AlimentoWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AlimentoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AlimentoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AlimentoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AlimentoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  aEstearico?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  aEstearico_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  aEstearico_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  aEstearico_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  aEstearico_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  aEstearico_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  aEstearico_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  aEstearico_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  aEstearico_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  aEstearico_starts_with?: InputMaybe<Scalars['String']>;
  aLinoleico?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  aLinoleico_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  aLinoleico_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  aLinoleico_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  aLinoleico_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  aLinoleico_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  aLinoleico_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  aLinoleico_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  aLinoleico_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  aLinoleico_starts_with?: InputMaybe<Scalars['String']>;
  aLinolenico?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  aLinolenico_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  aLinolenico_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  aLinolenico_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  aLinolenico_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  aLinolenico_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  aLinolenico_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  aLinolenico_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  aLinolenico_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  aLinolenico_starts_with?: InputMaybe<Scalars['String']>;
  aOleico?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  aOleico_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  aOleico_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  aOleico_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  aOleico_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  aOleico_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  aOleico_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  aOleico_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  aOleico_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  aOleico_starts_with?: InputMaybe<Scalars['String']>;
  aPalmitico?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  aPalmitico_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  aPalmitico_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  aPalmitico_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  aPalmitico_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  aPalmitico_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  aPalmitico_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  aPalmitico_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  aPalmitico_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  aPalmitico_starts_with?: InputMaybe<Scalars['String']>;
  aminograma?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  aminograma_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  aminograma_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  aminograma_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  aminograma_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  aminograma_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  aminograma_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  aminograma_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  aminograma_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  aminograma_starts_with?: InputMaybe<Scalars['String']>;
  arginina?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  arginina_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  arginina_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  arginina_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  arginina_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  arginina_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  arginina_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  arginina_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  arginina_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  arginina_starts_with?: InputMaybe<Scalars['String']>;
  ca?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  ca_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  ca_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ca_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  ca_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  ca_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  ca_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  ca_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  ca_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  ca_starts_with?: InputMaybe<Scalars['String']>;
  colSCheia?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  colSCheia_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  colSCheia_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  colSCheia_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  colSCheia_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  colSCheia_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  colSCheia_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  colSCheia_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  colSCheia_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  colSCheia_starts_with?: InputMaybe<Scalars['String']>;
  colest?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  colest_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  colest_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  colest_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  colest_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  colest_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  colest_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  colest_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  colest_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  colest_starts_with?: InputMaybe<Scalars['String']>;
  colherDeSobremesa?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  colherDeSobremesa_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  colherDeSobremesa_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  colherDeSobremesa_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  colherDeSobremesa_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  colherDeSobremesa_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  colherDeSobremesa_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  colherDeSobremesa_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  colherDeSobremesa_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  colherDeSobremesa_starts_with?: InputMaybe<Scalars['String']>;
  colherDeSopa?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  colherDeSopa_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  colherDeSopa_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  colherDeSopa_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  colherDeSopa_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  colherDeSopa_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  colherDeSopa_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  colherDeSopa_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  colherDeSopa_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  colherDeSopa_starts_with?: InputMaybe<Scalars['String']>;
  copoDuplo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  copoDuplo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  copoDuplo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  copoDuplo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  copoDuplo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  copoDuplo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  copoDuplo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  copoDuplo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  copoDuplo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  copoDuplo_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  cu?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  cu_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  cu_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  cu_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  cu_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  cu_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  cu_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  cu_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  cu_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  cu_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<AlimentoWhereStageInput>;
  documentInStages_none?: InputMaybe<AlimentoWhereStageInput>;
  documentInStages_some?: InputMaybe<AlimentoWhereStageInput>;
  fe?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fe_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fe_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fe_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  fe_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fe_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fe_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fe_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fe_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fe_starts_with?: InputMaybe<Scalars['String']>;
  fenilalanina?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fenilalanina_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fenilalanina_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fenilalanina_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  fenilalanina_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fenilalanina_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fenilalanina_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fenilalanina_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fenilalanina_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fenilalanina_starts_with?: InputMaybe<Scalars['String']>;
  fibra?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fibra_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fibra_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fibra_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  fibra_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fibra_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fibra_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fibra_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fibra_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fibra_starts_with?: InputMaybe<Scalars['String']>;
  fol?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fol_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fol_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fol_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  fol_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fol_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fol_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fol_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fol_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fol_starts_with?: InputMaybe<Scalars['String']>;
  gMono?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  gMono_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  gMono_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  gMono_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  gMono_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  gMono_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  gMono_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  gMono_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  gMono_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  gMono_starts_with?: InputMaybe<Scalars['String']>;
  gPoli?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  gPoli_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  gPoli_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  gPoli_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  gPoli_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  gPoli_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  gPoli_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  gPoli_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  gPoli_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  gPoli_starts_with?: InputMaybe<Scalars['String']>;
  gSat?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  gSat_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  gSat_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  gSat_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  gSat_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  gSat_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  gSat_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  gSat_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  gSat_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  gSat_starts_with?: InputMaybe<Scalars['String']>;
  gTot?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  gTot_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  gTot_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  gTot_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  gTot_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  gTot_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  gTot_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  gTot_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  gTot_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  gTot_starts_with?: InputMaybe<Scalars['String']>;
  gTrans?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  gTrans_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  gTrans_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  gTrans_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  gTrans_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  gTrans_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  gTrans_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  gTrans_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  gTrans_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  gTrans_starts_with?: InputMaybe<Scalars['String']>;
  gramas?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  gramas_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  gramas_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  gramas_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  gramas_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  gramas_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  gramas_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  gramas_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  gramas_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  gramas_starts_with?: InputMaybe<Scalars['String']>;
  histidina?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  histidina_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  histidina_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  histidina_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  histidina_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  histidina_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  histidina_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  histidina_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  histidina_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  histidina_starts_with?: InputMaybe<Scalars['String']>;
  i?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  i_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  i_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  i_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  i_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  i_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  i_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  i_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  i_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  i_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isoleucina?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  isoleucina_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  isoleucina_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  isoleucina_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  isoleucina_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  isoleucina_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  isoleucina_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  isoleucina_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  isoleucina_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  isoleucina_starts_with?: InputMaybe<Scalars['String']>;
  k?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  k_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  k_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  k_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  k_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  k_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  k_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  k_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  k_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  k_starts_with?: InputMaybe<Scalars['String']>;
  kcal?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  kcal_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  kcal_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  kcal_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  kcal_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  kcal_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  kcal_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  kcal_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  kcal_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  kcal_starts_with?: InputMaybe<Scalars['String']>;
  lisina?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  lisina_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  lisina_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lisina_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  lisina_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  lisina_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  lisina_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  lisina_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  lisina_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  lisina_starts_with?: InputMaybe<Scalars['String']>;
  metionina?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  metionina_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  metionina_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metionina_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  metionina_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  metionina_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  metionina_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metionina_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  metionina_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  metionina_starts_with?: InputMaybe<Scalars['String']>;
  mg?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mg_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mg_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mg_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  mg_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mg_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mg_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mg_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mg_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mg_starts_with?: InputMaybe<Scalars['String']>;
  mn?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mn_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mn_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mn_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  mn_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mn_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mn_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mn_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mn_starts_with?: InputMaybe<Scalars['String']>;
  na?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  na_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  na_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  na_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  na_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  na_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  na_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  na_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  na_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  na_starts_with?: InputMaybe<Scalars['String']>;
  nia?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  nia_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  nia_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nia_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  nia_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  nia_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  nia_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  nia_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  nia_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  nia_starts_with?: InputMaybe<Scalars['String']>;
  nome?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  nome_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  nome_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nome_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  nome_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  nome_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  nome_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  nome_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  nome_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  nome_starts_with?: InputMaybe<Scalars['String']>;
  p?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  p_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  p_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  p_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  p_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  p_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  p_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  p_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  p_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  p_starts_with?: InputMaybe<Scalars['String']>;
  pant?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pant_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pant_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pant_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  pant_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pant_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pant_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pant_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pant_starts_with?: InputMaybe<Scalars['String']>;
  prot?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  prot_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  prot_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  prot_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  prot_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  prot_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  prot_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  prot_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  prot_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  prot_starts_with?: InputMaybe<Scalars['String']>;
  ptFundo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  ptFundo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  ptFundo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ptFundo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  ptFundo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  ptFundo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  ptFundo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  ptFundo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  ptFundo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  ptFundo_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  se?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  se_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  se_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  se_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  se_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  se_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  se_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  se_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  se_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  se_starts_with?: InputMaybe<Scalars['String']>;
  tirosina?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  tirosina_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  tirosina_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  tirosina_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  tirosina_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  tirosina_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  tirosina_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  tirosina_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  tirosina_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  tirosina_starts_with?: InputMaybe<Scalars['String']>;
  treonina?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  treonina_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  treonina_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  treonina_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  treonina_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  treonina_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  treonina_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  treonina_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  treonina_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  treonina_starts_with?: InputMaybe<Scalars['String']>;
  triptofano?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  triptofano_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  triptofano_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  triptofano_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  triptofano_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  triptofano_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  triptofano_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  triptofano_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  triptofano_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  triptofano_starts_with?: InputMaybe<Scalars['String']>;
  unidG?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  unidG_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  unidG_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  unidG_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  unidG_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  unidG_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  unidG_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  unidG_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  unidG_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  unidG_starts_with?: InputMaybe<Scalars['String']>;
  unidM?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  unidM_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  unidM_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  unidM_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  unidM_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  unidM_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  unidM_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  unidM_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  unidM_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  unidM_starts_with?: InputMaybe<Scalars['String']>;
  unidP?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  unidP_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  unidP_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  unidP_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  unidP_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  unidP_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  unidP_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  unidP_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  unidP_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  unidP_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  valina?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  valina_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  valina_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  valina_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  valina_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  valina_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  valina_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  valina_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  valina_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  valina_starts_with?: InputMaybe<Scalars['String']>;
  vitA?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  vitA_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  vitA_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  vitA_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  vitA_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  vitA_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  vitA_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  vitA_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  vitA_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  vitA_starts_with?: InputMaybe<Scalars['String']>;
  vitB1?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  vitB1_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  vitB1_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  vitB1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  vitB1_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  vitB1_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  vitB1_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  vitB1_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  vitB1_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  vitB1_starts_with?: InputMaybe<Scalars['String']>;
  vitB2?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  vitB2_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  vitB2_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  vitB2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  vitB2_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  vitB2_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  vitB2_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  vitB2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  vitB2_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  vitB2_starts_with?: InputMaybe<Scalars['String']>;
  vitB6?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  vitB6_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  vitB6_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  vitB6_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  vitB6_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  vitB6_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  vitB6_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  vitB6_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  vitB6_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  vitB6_starts_with?: InputMaybe<Scalars['String']>;
  vitB12?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  vitB12_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  vitB12_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  vitB12_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  vitB12_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  vitB12_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  vitB12_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  vitB12_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  vitB12_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  vitB12_starts_with?: InputMaybe<Scalars['String']>;
  vitC?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  vitC_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  vitC_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  vitC_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  vitC_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  vitC_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  vitC_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  vitC_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  vitC_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  vitC_starts_with?: InputMaybe<Scalars['String']>;
  vitD?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  vitD_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  vitD_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  vitD_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  vitD_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  vitD_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  vitD_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  vitD_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  vitD_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  vitD_starts_with?: InputMaybe<Scalars['String']>;
  vitE?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  vitE_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  vitE_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  vitE_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  vitE_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  vitE_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  vitE_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  vitE_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  vitE_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  vitE_starts_with?: InputMaybe<Scalars['String']>;
  zn?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  zn_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  zn_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  zn_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  zn_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  zn_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  zn_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  zn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  zn_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  zn_starts_with?: InputMaybe<Scalars['String']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AlimentoWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AlimentoWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AlimentoWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AlimentoWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AlimentoWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Alimento record uniquely */
export type AlimentoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageForum: Array<Forum>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetImageForumArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ForumOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ForumWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  imageForum?: InputMaybe<ForumCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  slug?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageForum_every?: InputMaybe<ForumWhereInput>;
  imageForum_none?: InputMaybe<ForumWhereInput>;
  imageForum_some?: InputMaybe<ForumWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  imageForum?: InputMaybe<ForumUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  slug?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageForum_every?: InputMaybe<ForumWhereInput>;
  imageForum_none?: InputMaybe<ForumWhereInput>;
  imageForum_some?: InputMaybe<ForumWhereInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Autropometria = Node & {
  __typename?: 'Autropometria';
  abdomen?: Maybe<Scalars['String']>;
  abdominal?: Maybe<Scalars['String']>;
  alterdepeso?: Maybe<Scalars['String']>;
  altjoelho?: Maybe<Scalars['String']>;
  axiliarmedia?: Maybe<Scalars['String']>;
  biceps?: Maybe<Scalars['String']>;
  braco?: Maybe<Scalars['String']>;
  cintura?: Maybe<Scalars['String']>;
  coxa?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Autropometria>;
  estatura?: Maybe<Scalars['String']>;
  estjoelho?: Maybe<Scalars['String']>;
  gorduraabsoluta?: Maybe<Scalars['String']>;
  /** List of Autropometria versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  imcaltura?: Maybe<Scalars['String']>;
  indicedecoincidade?: Maybe<Scalars['String']>;
  massamagra?: Maybe<Scalars['String']>;
  musculardobraco?: Maybe<Scalars['String']>;
  observacao?: Maybe<Scalars['String']>;
  panturilha?: Maybe<Scalars['String']>;
  peitoral?: Maybe<Scalars['String']>;
  pesoIdeal?: Maybe<Scalars['String']>;
  pesoatual?: Maybe<Scalars['String']>;
  pesosaudavel?: Maybe<Scalars['String']>;
  pregatricipital?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  quadril?: Maybe<Scalars['String']>;
  relacaocinturaquadril?: Maybe<Scalars['String']>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  subescapular?: Maybe<Scalars['String']>;
  supraIliaca?: Maybe<Scalars['String']>;
  tricipital?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type AutropometriaCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type AutropometriaDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type AutropometriaHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type AutropometriaPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type AutropometriaScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type AutropometriaUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type AutropometriaConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AutropometriaWhereUniqueInput;
};

/** A connection to a list of items. */
export type AutropometriaConnection = {
  __typename?: 'AutropometriaConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AutropometriaEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AutropometriaCreateInput = {
  abdomen?: InputMaybe<Scalars['String']>;
  abdominal?: InputMaybe<Scalars['String']>;
  alterdepeso?: InputMaybe<Scalars['String']>;
  altjoelho?: InputMaybe<Scalars['String']>;
  axiliarmedia?: InputMaybe<Scalars['String']>;
  biceps?: InputMaybe<Scalars['String']>;
  braco?: InputMaybe<Scalars['String']>;
  cintura?: InputMaybe<Scalars['String']>;
  cl9q0ogsu0cs101tacypb18nr?: InputMaybe<SubscriberCreateManyInlineInput>;
  cl9qe09oi0qbi01t698yu4hhv?: InputMaybe<ConsultaCreateManyInlineInput>;
  coxa?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  estatura?: InputMaybe<Scalars['String']>;
  estjoelho?: InputMaybe<Scalars['String']>;
  gorduraabsoluta?: InputMaybe<Scalars['String']>;
  imcaltura?: InputMaybe<Scalars['String']>;
  indicedecoincidade?: InputMaybe<Scalars['String']>;
  massamagra?: InputMaybe<Scalars['String']>;
  musculardobraco?: InputMaybe<Scalars['String']>;
  observacao?: InputMaybe<Scalars['String']>;
  panturilha?: InputMaybe<Scalars['String']>;
  peitoral?: InputMaybe<Scalars['String']>;
  pesoIdeal?: InputMaybe<Scalars['String']>;
  pesoatual?: InputMaybe<Scalars['String']>;
  pesosaudavel?: InputMaybe<Scalars['String']>;
  pregatricipital?: InputMaybe<Scalars['String']>;
  quadril?: InputMaybe<Scalars['String']>;
  relacaocinturaquadril?: InputMaybe<Scalars['String']>;
  subescapular?: InputMaybe<Scalars['String']>;
  supraIliaca?: InputMaybe<Scalars['String']>;
  tricipital?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AutropometriaCreateManyInlineInput = {
  /** Connect multiple existing Autropometria documents */
  connect?: InputMaybe<Array<AutropometriaWhereUniqueInput>>;
  /** Create and connect multiple existing Autropometria documents */
  create?: InputMaybe<Array<AutropometriaCreateInput>>;
};

export type AutropometriaCreateOneInlineInput = {
  /** Connect one existing Autropometria document */
  connect?: InputMaybe<AutropometriaWhereUniqueInput>;
  /** Create and connect one Autropometria document */
  create?: InputMaybe<AutropometriaCreateInput>;
};

/** An edge in a connection. */
export type AutropometriaEdge = {
  __typename?: 'AutropometriaEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Autropometria;
};

/** Identifies documents */
export type AutropometriaManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AutropometriaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AutropometriaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AutropometriaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  abdomen?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  abdomen_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  abdomen_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  abdomen_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  abdomen_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  abdomen_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  abdomen_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  abdomen_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  abdomen_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  abdomen_starts_with?: InputMaybe<Scalars['String']>;
  abdominal?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  abdominal_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  abdominal_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  abdominal_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  abdominal_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  abdominal_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  abdominal_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  abdominal_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  abdominal_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  abdominal_starts_with?: InputMaybe<Scalars['String']>;
  alterdepeso?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  alterdepeso_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  alterdepeso_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  alterdepeso_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  alterdepeso_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  alterdepeso_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  alterdepeso_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  alterdepeso_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  alterdepeso_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  alterdepeso_starts_with?: InputMaybe<Scalars['String']>;
  altjoelho?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  altjoelho_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  altjoelho_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  altjoelho_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  altjoelho_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  altjoelho_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  altjoelho_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  altjoelho_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  altjoelho_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  altjoelho_starts_with?: InputMaybe<Scalars['String']>;
  axiliarmedia?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  axiliarmedia_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  axiliarmedia_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  axiliarmedia_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  axiliarmedia_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  axiliarmedia_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  axiliarmedia_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  axiliarmedia_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  axiliarmedia_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  axiliarmedia_starts_with?: InputMaybe<Scalars['String']>;
  biceps?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  biceps_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  biceps_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  biceps_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  biceps_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  biceps_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  biceps_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  biceps_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  biceps_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  biceps_starts_with?: InputMaybe<Scalars['String']>;
  braco?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  braco_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  braco_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  braco_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  braco_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  braco_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  braco_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  braco_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  braco_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  braco_starts_with?: InputMaybe<Scalars['String']>;
  cintura?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  cintura_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  cintura_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  cintura_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  cintura_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  cintura_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  cintura_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  cintura_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  cintura_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  cintura_starts_with?: InputMaybe<Scalars['String']>;
  coxa?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  coxa_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  coxa_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  coxa_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  coxa_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  coxa_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  coxa_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  coxa_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  coxa_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  coxa_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AutropometriaWhereStageInput>;
  documentInStages_none?: InputMaybe<AutropometriaWhereStageInput>;
  documentInStages_some?: InputMaybe<AutropometriaWhereStageInput>;
  estatura?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  estatura_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  estatura_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  estatura_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  estatura_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  estatura_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  estatura_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  estatura_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  estatura_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  estatura_starts_with?: InputMaybe<Scalars['String']>;
  estjoelho?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  estjoelho_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  estjoelho_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  estjoelho_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  estjoelho_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  estjoelho_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  estjoelho_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  estjoelho_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  estjoelho_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  estjoelho_starts_with?: InputMaybe<Scalars['String']>;
  gorduraabsoluta?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  gorduraabsoluta_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  gorduraabsoluta_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  gorduraabsoluta_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  gorduraabsoluta_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  gorduraabsoluta_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  gorduraabsoluta_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  gorduraabsoluta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  gorduraabsoluta_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  gorduraabsoluta_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imcaltura?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  imcaltura_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  imcaltura_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  imcaltura_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  imcaltura_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  imcaltura_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  imcaltura_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  imcaltura_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  imcaltura_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  imcaltura_starts_with?: InputMaybe<Scalars['String']>;
  indicedecoincidade?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  indicedecoincidade_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  indicedecoincidade_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  indicedecoincidade_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  indicedecoincidade_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  indicedecoincidade_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  indicedecoincidade_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  indicedecoincidade_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  indicedecoincidade_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  indicedecoincidade_starts_with?: InputMaybe<Scalars['String']>;
  massamagra?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  massamagra_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  massamagra_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  massamagra_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  massamagra_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  massamagra_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  massamagra_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  massamagra_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  massamagra_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  massamagra_starts_with?: InputMaybe<Scalars['String']>;
  musculardobraco?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  musculardobraco_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  musculardobraco_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  musculardobraco_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  musculardobraco_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  musculardobraco_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  musculardobraco_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  musculardobraco_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  musculardobraco_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  musculardobraco_starts_with?: InputMaybe<Scalars['String']>;
  observacao?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  observacao_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  observacao_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  observacao_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  observacao_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  observacao_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  observacao_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  observacao_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  observacao_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  observacao_starts_with?: InputMaybe<Scalars['String']>;
  panturilha?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  panturilha_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  panturilha_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  panturilha_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  panturilha_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  panturilha_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  panturilha_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  panturilha_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  panturilha_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  panturilha_starts_with?: InputMaybe<Scalars['String']>;
  peitoral?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  peitoral_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  peitoral_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  peitoral_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  peitoral_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  peitoral_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  peitoral_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  peitoral_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  peitoral_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  peitoral_starts_with?: InputMaybe<Scalars['String']>;
  pesoIdeal?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pesoIdeal_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pesoIdeal_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pesoIdeal_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  pesoIdeal_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pesoIdeal_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pesoIdeal_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pesoIdeal_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pesoIdeal_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pesoIdeal_starts_with?: InputMaybe<Scalars['String']>;
  pesoatual?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pesoatual_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pesoatual_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pesoatual_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  pesoatual_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pesoatual_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pesoatual_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pesoatual_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pesoatual_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pesoatual_starts_with?: InputMaybe<Scalars['String']>;
  pesosaudavel?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pesosaudavel_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pesosaudavel_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pesosaudavel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  pesosaudavel_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pesosaudavel_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pesosaudavel_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pesosaudavel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pesosaudavel_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pesosaudavel_starts_with?: InputMaybe<Scalars['String']>;
  pregatricipital?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pregatricipital_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pregatricipital_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pregatricipital_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  pregatricipital_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pregatricipital_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pregatricipital_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pregatricipital_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pregatricipital_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pregatricipital_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  quadril?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  quadril_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  quadril_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  quadril_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  quadril_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  quadril_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  quadril_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  quadril_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  quadril_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  quadril_starts_with?: InputMaybe<Scalars['String']>;
  relacaocinturaquadril?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  relacaocinturaquadril_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  relacaocinturaquadril_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  relacaocinturaquadril_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  relacaocinturaquadril_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  relacaocinturaquadril_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  relacaocinturaquadril_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  relacaocinturaquadril_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  relacaocinturaquadril_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  relacaocinturaquadril_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  subescapular?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subescapular_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subescapular_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subescapular_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subescapular_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subescapular_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subescapular_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subescapular_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subescapular_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subescapular_starts_with?: InputMaybe<Scalars['String']>;
  supraIliaca?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  supraIliaca_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  supraIliaca_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  supraIliaca_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  supraIliaca_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  supraIliaca_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  supraIliaca_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  supraIliaca_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  supraIliaca_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  supraIliaca_starts_with?: InputMaybe<Scalars['String']>;
  tricipital?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  tricipital_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  tricipital_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  tricipital_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  tricipital_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  tricipital_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  tricipital_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  tricipital_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  tricipital_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  tricipital_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AutropometriaOrderByInput {
  AbdomenAsc = 'abdomen_ASC',
  AbdomenDesc = 'abdomen_DESC',
  AbdominalAsc = 'abdominal_ASC',
  AbdominalDesc = 'abdominal_DESC',
  AlterdepesoAsc = 'alterdepeso_ASC',
  AlterdepesoDesc = 'alterdepeso_DESC',
  AltjoelhoAsc = 'altjoelho_ASC',
  AltjoelhoDesc = 'altjoelho_DESC',
  AxiliarmediaAsc = 'axiliarmedia_ASC',
  AxiliarmediaDesc = 'axiliarmedia_DESC',
  BicepsAsc = 'biceps_ASC',
  BicepsDesc = 'biceps_DESC',
  BracoAsc = 'braco_ASC',
  BracoDesc = 'braco_DESC',
  CinturaAsc = 'cintura_ASC',
  CinturaDesc = 'cintura_DESC',
  CoxaAsc = 'coxa_ASC',
  CoxaDesc = 'coxa_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EstaturaAsc = 'estatura_ASC',
  EstaturaDesc = 'estatura_DESC',
  EstjoelhoAsc = 'estjoelho_ASC',
  EstjoelhoDesc = 'estjoelho_DESC',
  GorduraabsolutaAsc = 'gorduraabsoluta_ASC',
  GorduraabsolutaDesc = 'gorduraabsoluta_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImcalturaAsc = 'imcaltura_ASC',
  ImcalturaDesc = 'imcaltura_DESC',
  IndicedecoincidadeAsc = 'indicedecoincidade_ASC',
  IndicedecoincidadeDesc = 'indicedecoincidade_DESC',
  MassamagraAsc = 'massamagra_ASC',
  MassamagraDesc = 'massamagra_DESC',
  MusculardobracoAsc = 'musculardobraco_ASC',
  MusculardobracoDesc = 'musculardobraco_DESC',
  ObservacaoAsc = 'observacao_ASC',
  ObservacaoDesc = 'observacao_DESC',
  PanturilhaAsc = 'panturilha_ASC',
  PanturilhaDesc = 'panturilha_DESC',
  PeitoralAsc = 'peitoral_ASC',
  PeitoralDesc = 'peitoral_DESC',
  PesoIdealAsc = 'pesoIdeal_ASC',
  PesoIdealDesc = 'pesoIdeal_DESC',
  PesoatualAsc = 'pesoatual_ASC',
  PesoatualDesc = 'pesoatual_DESC',
  PesosaudavelAsc = 'pesosaudavel_ASC',
  PesosaudavelDesc = 'pesosaudavel_DESC',
  PregatricipitalAsc = 'pregatricipital_ASC',
  PregatricipitalDesc = 'pregatricipital_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  QuadrilAsc = 'quadril_ASC',
  QuadrilDesc = 'quadril_DESC',
  RelacaocinturaquadrilAsc = 'relacaocinturaquadril_ASC',
  RelacaocinturaquadrilDesc = 'relacaocinturaquadril_DESC',
  SubescapularAsc = 'subescapular_ASC',
  SubescapularDesc = 'subescapular_DESC',
  SupraIliacaAsc = 'supraIliaca_ASC',
  SupraIliacaDesc = 'supraIliaca_DESC',
  TricipitalAsc = 'tricipital_ASC',
  TricipitalDesc = 'tricipital_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type AutropometriaUpdateInput = {
  abdomen?: InputMaybe<Scalars['String']>;
  abdominal?: InputMaybe<Scalars['String']>;
  alterdepeso?: InputMaybe<Scalars['String']>;
  altjoelho?: InputMaybe<Scalars['String']>;
  axiliarmedia?: InputMaybe<Scalars['String']>;
  biceps?: InputMaybe<Scalars['String']>;
  braco?: InputMaybe<Scalars['String']>;
  cintura?: InputMaybe<Scalars['String']>;
  cl9q0ogsu0cs101tacypb18nr?: InputMaybe<SubscriberUpdateManyInlineInput>;
  cl9qe09oi0qbi01t698yu4hhv?: InputMaybe<ConsultaUpdateManyInlineInput>;
  coxa?: InputMaybe<Scalars['String']>;
  estatura?: InputMaybe<Scalars['String']>;
  estjoelho?: InputMaybe<Scalars['String']>;
  gorduraabsoluta?: InputMaybe<Scalars['String']>;
  imcaltura?: InputMaybe<Scalars['String']>;
  indicedecoincidade?: InputMaybe<Scalars['String']>;
  massamagra?: InputMaybe<Scalars['String']>;
  musculardobraco?: InputMaybe<Scalars['String']>;
  observacao?: InputMaybe<Scalars['String']>;
  panturilha?: InputMaybe<Scalars['String']>;
  peitoral?: InputMaybe<Scalars['String']>;
  pesoIdeal?: InputMaybe<Scalars['String']>;
  pesoatual?: InputMaybe<Scalars['String']>;
  pesosaudavel?: InputMaybe<Scalars['String']>;
  pregatricipital?: InputMaybe<Scalars['String']>;
  quadril?: InputMaybe<Scalars['String']>;
  relacaocinturaquadril?: InputMaybe<Scalars['String']>;
  subescapular?: InputMaybe<Scalars['String']>;
  supraIliaca?: InputMaybe<Scalars['String']>;
  tricipital?: InputMaybe<Scalars['String']>;
};

export type AutropometriaUpdateManyInlineInput = {
  /** Connect multiple existing Autropometria documents */
  connect?: InputMaybe<Array<AutropometriaConnectInput>>;
  /** Create and connect multiple Autropometria documents */
  create?: InputMaybe<Array<AutropometriaCreateInput>>;
  /** Delete multiple Autropometria documents */
  delete?: InputMaybe<Array<AutropometriaWhereUniqueInput>>;
  /** Disconnect multiple Autropometria documents */
  disconnect?: InputMaybe<Array<AutropometriaWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Autropometria documents */
  set?: InputMaybe<Array<AutropometriaWhereUniqueInput>>;
  /** Update multiple Autropometria documents */
  update?: InputMaybe<Array<AutropometriaUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Autropometria documents */
  upsert?: InputMaybe<Array<AutropometriaUpsertWithNestedWhereUniqueInput>>;
};

export type AutropometriaUpdateManyInput = {
  abdomen?: InputMaybe<Scalars['String']>;
  abdominal?: InputMaybe<Scalars['String']>;
  alterdepeso?: InputMaybe<Scalars['String']>;
  altjoelho?: InputMaybe<Scalars['String']>;
  axiliarmedia?: InputMaybe<Scalars['String']>;
  biceps?: InputMaybe<Scalars['String']>;
  braco?: InputMaybe<Scalars['String']>;
  cintura?: InputMaybe<Scalars['String']>;
  coxa?: InputMaybe<Scalars['String']>;
  estatura?: InputMaybe<Scalars['String']>;
  estjoelho?: InputMaybe<Scalars['String']>;
  gorduraabsoluta?: InputMaybe<Scalars['String']>;
  imcaltura?: InputMaybe<Scalars['String']>;
  indicedecoincidade?: InputMaybe<Scalars['String']>;
  massamagra?: InputMaybe<Scalars['String']>;
  musculardobraco?: InputMaybe<Scalars['String']>;
  observacao?: InputMaybe<Scalars['String']>;
  panturilha?: InputMaybe<Scalars['String']>;
  peitoral?: InputMaybe<Scalars['String']>;
  pesoIdeal?: InputMaybe<Scalars['String']>;
  pesoatual?: InputMaybe<Scalars['String']>;
  pesosaudavel?: InputMaybe<Scalars['String']>;
  pregatricipital?: InputMaybe<Scalars['String']>;
  quadril?: InputMaybe<Scalars['String']>;
  relacaocinturaquadril?: InputMaybe<Scalars['String']>;
  subescapular?: InputMaybe<Scalars['String']>;
  supraIliaca?: InputMaybe<Scalars['String']>;
  tricipital?: InputMaybe<Scalars['String']>;
};

export type AutropometriaUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AutropometriaUpdateManyInput;
  /** Document search */
  where: AutropometriaWhereInput;
};

export type AutropometriaUpdateOneInlineInput = {
  /** Connect existing Autropometria document */
  connect?: InputMaybe<AutropometriaWhereUniqueInput>;
  /** Create and connect one Autropometria document */
  create?: InputMaybe<AutropometriaCreateInput>;
  /** Delete currently connected Autropometria document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Autropometria document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Autropometria document */
  update?: InputMaybe<AutropometriaUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Autropometria document */
  upsert?: InputMaybe<AutropometriaUpsertWithNestedWhereUniqueInput>;
};

export type AutropometriaUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AutropometriaUpdateInput;
  /** Unique document search */
  where: AutropometriaWhereUniqueInput;
};

export type AutropometriaUpsertInput = {
  /** Create document if it didn't exist */
  create: AutropometriaCreateInput;
  /** Update document if it exists */
  update: AutropometriaUpdateInput;
};

export type AutropometriaUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AutropometriaUpsertInput;
  /** Unique document search */
  where: AutropometriaWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AutropometriaWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AutropometriaWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AutropometriaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AutropometriaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AutropometriaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  abdomen?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  abdomen_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  abdomen_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  abdomen_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  abdomen_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  abdomen_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  abdomen_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  abdomen_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  abdomen_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  abdomen_starts_with?: InputMaybe<Scalars['String']>;
  abdominal?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  abdominal_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  abdominal_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  abdominal_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  abdominal_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  abdominal_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  abdominal_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  abdominal_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  abdominal_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  abdominal_starts_with?: InputMaybe<Scalars['String']>;
  alterdepeso?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  alterdepeso_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  alterdepeso_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  alterdepeso_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  alterdepeso_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  alterdepeso_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  alterdepeso_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  alterdepeso_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  alterdepeso_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  alterdepeso_starts_with?: InputMaybe<Scalars['String']>;
  altjoelho?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  altjoelho_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  altjoelho_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  altjoelho_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  altjoelho_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  altjoelho_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  altjoelho_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  altjoelho_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  altjoelho_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  altjoelho_starts_with?: InputMaybe<Scalars['String']>;
  axiliarmedia?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  axiliarmedia_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  axiliarmedia_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  axiliarmedia_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  axiliarmedia_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  axiliarmedia_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  axiliarmedia_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  axiliarmedia_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  axiliarmedia_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  axiliarmedia_starts_with?: InputMaybe<Scalars['String']>;
  biceps?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  biceps_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  biceps_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  biceps_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  biceps_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  biceps_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  biceps_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  biceps_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  biceps_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  biceps_starts_with?: InputMaybe<Scalars['String']>;
  braco?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  braco_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  braco_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  braco_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  braco_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  braco_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  braco_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  braco_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  braco_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  braco_starts_with?: InputMaybe<Scalars['String']>;
  cintura?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  cintura_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  cintura_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  cintura_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  cintura_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  cintura_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  cintura_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  cintura_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  cintura_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  cintura_starts_with?: InputMaybe<Scalars['String']>;
  coxa?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  coxa_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  coxa_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  coxa_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  coxa_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  coxa_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  coxa_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  coxa_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  coxa_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  coxa_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AutropometriaWhereStageInput>;
  documentInStages_none?: InputMaybe<AutropometriaWhereStageInput>;
  documentInStages_some?: InputMaybe<AutropometriaWhereStageInput>;
  estatura?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  estatura_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  estatura_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  estatura_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  estatura_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  estatura_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  estatura_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  estatura_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  estatura_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  estatura_starts_with?: InputMaybe<Scalars['String']>;
  estjoelho?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  estjoelho_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  estjoelho_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  estjoelho_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  estjoelho_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  estjoelho_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  estjoelho_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  estjoelho_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  estjoelho_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  estjoelho_starts_with?: InputMaybe<Scalars['String']>;
  gorduraabsoluta?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  gorduraabsoluta_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  gorduraabsoluta_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  gorduraabsoluta_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  gorduraabsoluta_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  gorduraabsoluta_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  gorduraabsoluta_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  gorduraabsoluta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  gorduraabsoluta_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  gorduraabsoluta_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imcaltura?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  imcaltura_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  imcaltura_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  imcaltura_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  imcaltura_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  imcaltura_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  imcaltura_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  imcaltura_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  imcaltura_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  imcaltura_starts_with?: InputMaybe<Scalars['String']>;
  indicedecoincidade?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  indicedecoincidade_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  indicedecoincidade_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  indicedecoincidade_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  indicedecoincidade_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  indicedecoincidade_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  indicedecoincidade_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  indicedecoincidade_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  indicedecoincidade_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  indicedecoincidade_starts_with?: InputMaybe<Scalars['String']>;
  massamagra?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  massamagra_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  massamagra_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  massamagra_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  massamagra_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  massamagra_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  massamagra_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  massamagra_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  massamagra_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  massamagra_starts_with?: InputMaybe<Scalars['String']>;
  musculardobraco?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  musculardobraco_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  musculardobraco_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  musculardobraco_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  musculardobraco_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  musculardobraco_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  musculardobraco_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  musculardobraco_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  musculardobraco_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  musculardobraco_starts_with?: InputMaybe<Scalars['String']>;
  observacao?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  observacao_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  observacao_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  observacao_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  observacao_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  observacao_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  observacao_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  observacao_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  observacao_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  observacao_starts_with?: InputMaybe<Scalars['String']>;
  panturilha?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  panturilha_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  panturilha_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  panturilha_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  panturilha_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  panturilha_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  panturilha_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  panturilha_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  panturilha_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  panturilha_starts_with?: InputMaybe<Scalars['String']>;
  peitoral?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  peitoral_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  peitoral_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  peitoral_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  peitoral_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  peitoral_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  peitoral_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  peitoral_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  peitoral_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  peitoral_starts_with?: InputMaybe<Scalars['String']>;
  pesoIdeal?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pesoIdeal_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pesoIdeal_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pesoIdeal_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  pesoIdeal_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pesoIdeal_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pesoIdeal_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pesoIdeal_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pesoIdeal_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pesoIdeal_starts_with?: InputMaybe<Scalars['String']>;
  pesoatual?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pesoatual_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pesoatual_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pesoatual_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  pesoatual_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pesoatual_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pesoatual_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pesoatual_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pesoatual_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pesoatual_starts_with?: InputMaybe<Scalars['String']>;
  pesosaudavel?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pesosaudavel_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pesosaudavel_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pesosaudavel_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  pesosaudavel_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pesosaudavel_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pesosaudavel_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pesosaudavel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pesosaudavel_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pesosaudavel_starts_with?: InputMaybe<Scalars['String']>;
  pregatricipital?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pregatricipital_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pregatricipital_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pregatricipital_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  pregatricipital_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pregatricipital_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pregatricipital_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pregatricipital_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pregatricipital_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pregatricipital_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  quadril?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  quadril_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  quadril_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  quadril_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  quadril_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  quadril_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  quadril_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  quadril_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  quadril_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  quadril_starts_with?: InputMaybe<Scalars['String']>;
  relacaocinturaquadril?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  relacaocinturaquadril_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  relacaocinturaquadril_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  relacaocinturaquadril_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  relacaocinturaquadril_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  relacaocinturaquadril_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  relacaocinturaquadril_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  relacaocinturaquadril_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  relacaocinturaquadril_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  relacaocinturaquadril_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  subescapular?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  subescapular_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  subescapular_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subescapular_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  subescapular_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  subescapular_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  subescapular_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subescapular_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  subescapular_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  subescapular_starts_with?: InputMaybe<Scalars['String']>;
  supraIliaca?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  supraIliaca_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  supraIliaca_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  supraIliaca_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  supraIliaca_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  supraIliaca_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  supraIliaca_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  supraIliaca_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  supraIliaca_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  supraIliaca_starts_with?: InputMaybe<Scalars['String']>;
  tricipital?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  tricipital_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  tricipital_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  tricipital_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  tricipital_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  tricipital_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  tricipital_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  tricipital_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  tricipital_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  tricipital_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AutropometriaWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AutropometriaWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AutropometriaWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AutropometriaWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AutropometriaWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Autropometria record uniquely */
export type AutropometriaWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type Challenge = Node & {
  __typename?: 'Challenge';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Challenge>;
  /** List of Challenge versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  url: Scalars['String'];
};


export type ChallengeCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ChallengeDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ChallengeHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ChallengePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ChallengeScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ChallengeUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ChallengeConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ChallengeWhereUniqueInput;
};

/** A connection to a list of items. */
export type ChallengeConnection = {
  __typename?: 'ChallengeConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ChallengeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ChallengeCreateInput = {
  cl4e8k4ev0anm01xu7gc87fn9?: InputMaybe<LessonCreateManyInlineInput>;
  cl65j06ej8tqm01uk0qrz83gn?: InputMaybe<LessonevCreateManyInlineInput>;
  cl67klvifcgmk01t5douk1b9w?: InputMaybe<LessonfoCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ChallengeCreateManyInlineInput = {
  /** Connect multiple existing Challenge documents */
  connect?: InputMaybe<Array<ChallengeWhereUniqueInput>>;
  /** Create and connect multiple existing Challenge documents */
  create?: InputMaybe<Array<ChallengeCreateInput>>;
};

export type ChallengeCreateOneInlineInput = {
  /** Connect one existing Challenge document */
  connect?: InputMaybe<ChallengeWhereUniqueInput>;
  /** Create and connect one Challenge document */
  create?: InputMaybe<ChallengeCreateInput>;
};

/** An edge in a connection. */
export type ChallengeEdge = {
  __typename?: 'ChallengeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Challenge;
};

/** Identifies documents */
export type ChallengeManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ChallengeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ChallengeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ChallengeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ChallengeWhereStageInput>;
  documentInStages_none?: InputMaybe<ChallengeWhereStageInput>;
  documentInStages_some?: InputMaybe<ChallengeWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  url_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ChallengeOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type ChallengeUpdateInput = {
  cl4e8k4ev0anm01xu7gc87fn9?: InputMaybe<LessonUpdateManyInlineInput>;
  cl65j06ej8tqm01uk0qrz83gn?: InputMaybe<LessonevUpdateManyInlineInput>;
  cl67klvifcgmk01t5douk1b9w?: InputMaybe<LessonfoUpdateManyInlineInput>;
  url?: InputMaybe<Scalars['String']>;
};

export type ChallengeUpdateManyInlineInput = {
  /** Connect multiple existing Challenge documents */
  connect?: InputMaybe<Array<ChallengeConnectInput>>;
  /** Create and connect multiple Challenge documents */
  create?: InputMaybe<Array<ChallengeCreateInput>>;
  /** Delete multiple Challenge documents */
  delete?: InputMaybe<Array<ChallengeWhereUniqueInput>>;
  /** Disconnect multiple Challenge documents */
  disconnect?: InputMaybe<Array<ChallengeWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Challenge documents */
  set?: InputMaybe<Array<ChallengeWhereUniqueInput>>;
  /** Update multiple Challenge documents */
  update?: InputMaybe<Array<ChallengeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Challenge documents */
  upsert?: InputMaybe<Array<ChallengeUpsertWithNestedWhereUniqueInput>>;
};

export type ChallengeUpdateManyInput = {
  url?: InputMaybe<Scalars['String']>;
};

export type ChallengeUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ChallengeUpdateManyInput;
  /** Document search */
  where: ChallengeWhereInput;
};

export type ChallengeUpdateOneInlineInput = {
  /** Connect existing Challenge document */
  connect?: InputMaybe<ChallengeWhereUniqueInput>;
  /** Create and connect one Challenge document */
  create?: InputMaybe<ChallengeCreateInput>;
  /** Delete currently connected Challenge document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Challenge document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Challenge document */
  update?: InputMaybe<ChallengeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Challenge document */
  upsert?: InputMaybe<ChallengeUpsertWithNestedWhereUniqueInput>;
};

export type ChallengeUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ChallengeUpdateInput;
  /** Unique document search */
  where: ChallengeWhereUniqueInput;
};

export type ChallengeUpsertInput = {
  /** Create document if it didn't exist */
  create: ChallengeCreateInput;
  /** Update document if it exists */
  update: ChallengeUpdateInput;
};

export type ChallengeUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ChallengeUpsertInput;
  /** Unique document search */
  where: ChallengeWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ChallengeWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ChallengeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ChallengeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ChallengeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ChallengeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ChallengeWhereStageInput>;
  documentInStages_none?: InputMaybe<ChallengeWhereStageInput>;
  documentInStages_some?: InputMaybe<ChallengeWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  url_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ChallengeWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ChallengeWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ChallengeWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ChallengeWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ChallengeWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Challenge record uniquely */
export type ChallengeWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type Condulta = Node & {
  __typename?: 'Condulta';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Condulta>;
  /** List of Condulta versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type CondultaCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CondultaDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type CondultaHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type CondultaPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CondultaScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CondultaUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type CondultaConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CondultaWhereUniqueInput;
};

/** A connection to a list of items. */
export type CondultaConnection = {
  __typename?: 'CondultaConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CondultaEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CondultaCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CondultaCreateManyInlineInput = {
  /** Connect multiple existing Condulta documents */
  connect?: InputMaybe<Array<CondultaWhereUniqueInput>>;
  /** Create and connect multiple existing Condulta documents */
  create?: InputMaybe<Array<CondultaCreateInput>>;
};

export type CondultaCreateOneInlineInput = {
  /** Connect one existing Condulta document */
  connect?: InputMaybe<CondultaWhereUniqueInput>;
  /** Create and connect one Condulta document */
  create?: InputMaybe<CondultaCreateInput>;
};

/** An edge in a connection. */
export type CondultaEdge = {
  __typename?: 'CondultaEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Condulta;
};

/** Identifies documents */
export type CondultaManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CondultaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CondultaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CondultaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<CondultaWhereStageInput>;
  documentInStages_none?: InputMaybe<CondultaWhereStageInput>;
  documentInStages_some?: InputMaybe<CondultaWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CondultaOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CondultaUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CondultaUpdateManyInlineInput = {
  /** Connect multiple existing Condulta documents */
  connect?: InputMaybe<Array<CondultaConnectInput>>;
  /** Create and connect multiple Condulta documents */
  create?: InputMaybe<Array<CondultaCreateInput>>;
  /** Delete multiple Condulta documents */
  delete?: InputMaybe<Array<CondultaWhereUniqueInput>>;
  /** Disconnect multiple Condulta documents */
  disconnect?: InputMaybe<Array<CondultaWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Condulta documents */
  set?: InputMaybe<Array<CondultaWhereUniqueInput>>;
  /** Update multiple Condulta documents */
  update?: InputMaybe<Array<CondultaUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Condulta documents */
  upsert?: InputMaybe<Array<CondultaUpsertWithNestedWhereUniqueInput>>;
};

export type CondultaUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CondultaUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CondultaUpdateManyInput;
  /** Document search */
  where: CondultaWhereInput;
};

export type CondultaUpdateOneInlineInput = {
  /** Connect existing Condulta document */
  connect?: InputMaybe<CondultaWhereUniqueInput>;
  /** Create and connect one Condulta document */
  create?: InputMaybe<CondultaCreateInput>;
  /** Delete currently connected Condulta document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Condulta document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Condulta document */
  update?: InputMaybe<CondultaUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Condulta document */
  upsert?: InputMaybe<CondultaUpsertWithNestedWhereUniqueInput>;
};

export type CondultaUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CondultaUpdateInput;
  /** Unique document search */
  where: CondultaWhereUniqueInput;
};

export type CondultaUpsertInput = {
  /** Create document if it didn't exist */
  create: CondultaCreateInput;
  /** Update document if it exists */
  update: CondultaUpdateInput;
};

export type CondultaUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CondultaUpsertInput;
  /** Unique document search */
  where: CondultaWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CondultaWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type CondultaWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CondultaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CondultaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CondultaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<CondultaWhereStageInput>;
  documentInStages_none?: InputMaybe<CondultaWhereStageInput>;
  documentInStages_some?: InputMaybe<CondultaWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CondultaWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CondultaWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CondultaWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CondultaWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CondultaWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Condulta record uniquely */
export type CondultaWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export type Consulta = Node & {
  __typename?: 'Consulta';
  autropometria?: Maybe<Autropometria>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  dataconsulta?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Consulta>;
  /** List of Consulta versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  subscriber?: Maybe<Subscriber>;
  tipo?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ConsultaAutropometriaArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ConsultaCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ConsultaDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ConsultaHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ConsultaPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ConsultaScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ConsultaSubscriberArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ConsultaUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ConsultaConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ConsultaWhereUniqueInput;
};

/** A connection to a list of items. */
export type ConsultaConnection = {
  __typename?: 'ConsultaConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ConsultaEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ConsultaCreateInput = {
  autropometria?: InputMaybe<AutropometriaCreateOneInlineInput>;
  cl9q00m3k0djm01uk64vn4vlg?: InputMaybe<SubscriberCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dataconsulta?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  subscriber?: InputMaybe<SubscriberCreateOneInlineInput>;
  tipo?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ConsultaCreateManyInlineInput = {
  /** Connect multiple existing Consulta documents */
  connect?: InputMaybe<Array<ConsultaWhereUniqueInput>>;
  /** Create and connect multiple existing Consulta documents */
  create?: InputMaybe<Array<ConsultaCreateInput>>;
};

export type ConsultaCreateOneInlineInput = {
  /** Connect one existing Consulta document */
  connect?: InputMaybe<ConsultaWhereUniqueInput>;
  /** Create and connect one Consulta document */
  create?: InputMaybe<ConsultaCreateInput>;
};

/** An edge in a connection. */
export type ConsultaEdge = {
  __typename?: 'ConsultaEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Consulta;
};

/** Identifies documents */
export type ConsultaManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ConsultaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ConsultaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ConsultaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  autropometria?: InputMaybe<AutropometriaWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  dataconsulta?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  dataconsulta_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  dataconsulta_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  dataconsulta_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  dataconsulta_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  dataconsulta_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  dataconsulta_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  dataconsulta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  dataconsulta_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  dataconsulta_starts_with?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<ConsultaWhereStageInput>;
  documentInStages_none?: InputMaybe<ConsultaWhereStageInput>;
  documentInStages_some?: InputMaybe<ConsultaWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  subscriber?: InputMaybe<SubscriberWhereInput>;
  tipo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  tipo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  tipo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  tipo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  tipo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  tipo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  tipo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  tipo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  tipo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  tipo_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ConsultaOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DataconsultaAsc = 'dataconsulta_ASC',
  DataconsultaDesc = 'dataconsulta_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TipoAsc = 'tipo_ASC',
  TipoDesc = 'tipo_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ConsultaUpdateInput = {
  autropometria?: InputMaybe<AutropometriaUpdateOneInlineInput>;
  cl9q00m3k0djm01uk64vn4vlg?: InputMaybe<SubscriberUpdateManyInlineInput>;
  dataconsulta?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  subscriber?: InputMaybe<SubscriberUpdateOneInlineInput>;
  tipo?: InputMaybe<Scalars['String']>;
};

export type ConsultaUpdateManyInlineInput = {
  /** Connect multiple existing Consulta documents */
  connect?: InputMaybe<Array<ConsultaConnectInput>>;
  /** Create and connect multiple Consulta documents */
  create?: InputMaybe<Array<ConsultaCreateInput>>;
  /** Delete multiple Consulta documents */
  delete?: InputMaybe<Array<ConsultaWhereUniqueInput>>;
  /** Disconnect multiple Consulta documents */
  disconnect?: InputMaybe<Array<ConsultaWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Consulta documents */
  set?: InputMaybe<Array<ConsultaWhereUniqueInput>>;
  /** Update multiple Consulta documents */
  update?: InputMaybe<Array<ConsultaUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Consulta documents */
  upsert?: InputMaybe<Array<ConsultaUpsertWithNestedWhereUniqueInput>>;
};

export type ConsultaUpdateManyInput = {
  dataconsulta?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  tipo?: InputMaybe<Scalars['String']>;
};

export type ConsultaUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ConsultaUpdateManyInput;
  /** Document search */
  where: ConsultaWhereInput;
};

export type ConsultaUpdateOneInlineInput = {
  /** Connect existing Consulta document */
  connect?: InputMaybe<ConsultaWhereUniqueInput>;
  /** Create and connect one Consulta document */
  create?: InputMaybe<ConsultaCreateInput>;
  /** Delete currently connected Consulta document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Consulta document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Consulta document */
  update?: InputMaybe<ConsultaUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Consulta document */
  upsert?: InputMaybe<ConsultaUpsertWithNestedWhereUniqueInput>;
};

export type ConsultaUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ConsultaUpdateInput;
  /** Unique document search */
  where: ConsultaWhereUniqueInput;
};

export type ConsultaUpsertInput = {
  /** Create document if it didn't exist */
  create: ConsultaCreateInput;
  /** Update document if it exists */
  update: ConsultaUpdateInput;
};

export type ConsultaUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ConsultaUpsertInput;
  /** Unique document search */
  where: ConsultaWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ConsultaWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ConsultaWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ConsultaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ConsultaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ConsultaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  autropometria?: InputMaybe<AutropometriaWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  dataconsulta?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  dataconsulta_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  dataconsulta_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  dataconsulta_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  dataconsulta_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  dataconsulta_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  dataconsulta_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  dataconsulta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  dataconsulta_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  dataconsulta_starts_with?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<ConsultaWhereStageInput>;
  documentInStages_none?: InputMaybe<ConsultaWhereStageInput>;
  documentInStages_some?: InputMaybe<ConsultaWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  subscriber?: InputMaybe<SubscriberWhereInput>;
  tipo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  tipo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  tipo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  tipo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  tipo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  tipo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  tipo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  tipo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  tipo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  tipo_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ConsultaWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ConsultaWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ConsultaWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ConsultaWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ConsultaWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Consulta record uniquely */
export type ConsultaWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export enum Convenio {
  Assefaz = 'assefaz',
  Capesaude = 'capesaude',
  Iapep = 'iapep',
  Ipmt = 'ipmt',
  Unimed = 'unimed'
}

/** This enumeration allow you to list of values that you can use when you add a Dropdown field. */
export enum DemoEnumeration {
  Large = 'Large',
  Medium = 'Medium',
  Small = 'Small'
}

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Feedback = Node & {
  __typename?: 'Feedback';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Feedback>;
  feedbacks?: Maybe<Scalars['String']>;
  /** List of Feedback versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  lesson?: Maybe<Lesson>;
  lessonev?: Maybe<Lessonev>;
  lessonfo?: Maybe<Lessonfo>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  subscriber?: Maybe<Subscriber>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type FeedbackCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type FeedbackDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type FeedbackHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type FeedbackLessonArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type FeedbackLessonevArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type FeedbackLessonfoArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type FeedbackPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type FeedbackScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type FeedbackSubscriberArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type FeedbackUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type FeedbackConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FeedbackWhereUniqueInput;
};

/** A connection to a list of items. */
export type FeedbackConnection = {
  __typename?: 'FeedbackConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FeedbackEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FeedbackCreateInput = {
  cl577n1z64hpi01ui4lmp3mkw?: InputMaybe<SubscriberCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  feedbacks?: InputMaybe<Scalars['String']>;
  lesson?: InputMaybe<LessonCreateOneInlineInput>;
  lessonev?: InputMaybe<LessonevCreateOneInlineInput>;
  lessonfo?: InputMaybe<LessonfoCreateOneInlineInput>;
  subscriber?: InputMaybe<SubscriberCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FeedbackCreateManyInlineInput = {
  /** Connect multiple existing Feedback documents */
  connect?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  /** Create and connect multiple existing Feedback documents */
  create?: InputMaybe<Array<FeedbackCreateInput>>;
};

export type FeedbackCreateOneInlineInput = {
  /** Connect one existing Feedback document */
  connect?: InputMaybe<FeedbackWhereUniqueInput>;
  /** Create and connect one Feedback document */
  create?: InputMaybe<FeedbackCreateInput>;
};

/** An edge in a connection. */
export type FeedbackEdge = {
  __typename?: 'FeedbackEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Feedback;
};

/** Identifies documents */
export type FeedbackManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeedbackWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeedbackWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeedbackWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FeedbackWhereStageInput>;
  documentInStages_none?: InputMaybe<FeedbackWhereStageInput>;
  documentInStages_some?: InputMaybe<FeedbackWhereStageInput>;
  feedbacks?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  feedbacks_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  feedbacks_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  feedbacks_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  feedbacks_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  feedbacks_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  feedbacks_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  feedbacks_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  feedbacks_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  feedbacks_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  lesson?: InputMaybe<LessonWhereInput>;
  lessonev?: InputMaybe<LessonevWhereInput>;
  lessonfo?: InputMaybe<LessonfoWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  subscriber?: InputMaybe<SubscriberWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum FeedbackOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FeedbacksAsc = 'feedbacks_ASC',
  FeedbacksDesc = 'feedbacks_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type FeedbackUpdateInput = {
  cl577n1z64hpi01ui4lmp3mkw?: InputMaybe<SubscriberUpdateManyInlineInput>;
  feedbacks?: InputMaybe<Scalars['String']>;
  lesson?: InputMaybe<LessonUpdateOneInlineInput>;
  lessonev?: InputMaybe<LessonevUpdateOneInlineInput>;
  lessonfo?: InputMaybe<LessonfoUpdateOneInlineInput>;
  subscriber?: InputMaybe<SubscriberUpdateOneInlineInput>;
};

export type FeedbackUpdateManyInlineInput = {
  /** Connect multiple existing Feedback documents */
  connect?: InputMaybe<Array<FeedbackConnectInput>>;
  /** Create and connect multiple Feedback documents */
  create?: InputMaybe<Array<FeedbackCreateInput>>;
  /** Delete multiple Feedback documents */
  delete?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  /** Disconnect multiple Feedback documents */
  disconnect?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Feedback documents */
  set?: InputMaybe<Array<FeedbackWhereUniqueInput>>;
  /** Update multiple Feedback documents */
  update?: InputMaybe<Array<FeedbackUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Feedback documents */
  upsert?: InputMaybe<Array<FeedbackUpsertWithNestedWhereUniqueInput>>;
};

export type FeedbackUpdateManyInput = {
  feedbacks?: InputMaybe<Scalars['String']>;
};

export type FeedbackUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FeedbackUpdateManyInput;
  /** Document search */
  where: FeedbackWhereInput;
};

export type FeedbackUpdateOneInlineInput = {
  /** Connect existing Feedback document */
  connect?: InputMaybe<FeedbackWhereUniqueInput>;
  /** Create and connect one Feedback document */
  create?: InputMaybe<FeedbackCreateInput>;
  /** Delete currently connected Feedback document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Feedback document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Feedback document */
  update?: InputMaybe<FeedbackUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Feedback document */
  upsert?: InputMaybe<FeedbackUpsertWithNestedWhereUniqueInput>;
};

export type FeedbackUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FeedbackUpdateInput;
  /** Unique document search */
  where: FeedbackWhereUniqueInput;
};

export type FeedbackUpsertInput = {
  /** Create document if it didn't exist */
  create: FeedbackCreateInput;
  /** Update document if it exists */
  update: FeedbackUpdateInput;
};

export type FeedbackUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FeedbackUpsertInput;
  /** Unique document search */
  where: FeedbackWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type FeedbackWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type FeedbackWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeedbackWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeedbackWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeedbackWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FeedbackWhereStageInput>;
  documentInStages_none?: InputMaybe<FeedbackWhereStageInput>;
  documentInStages_some?: InputMaybe<FeedbackWhereStageInput>;
  feedbacks?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  feedbacks_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  feedbacks_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  feedbacks_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  feedbacks_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  feedbacks_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  feedbacks_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  feedbacks_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  feedbacks_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  feedbacks_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  lesson?: InputMaybe<LessonWhereInput>;
  lessonev?: InputMaybe<LessonevWhereInput>;
  lessonfo?: InputMaybe<LessonfoWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  subscriber?: InputMaybe<SubscriberWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type FeedbackWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeedbackWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeedbackWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeedbackWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<FeedbackWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Feedback record uniquely */
export type FeedbackWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Forum = Node & {
  __typename?: 'Forum';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description: Scalars['String'];
  /** Get the document in other stages */
  documentInStages: Array<Forum>;
  /** List of Forum versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  image?: Maybe<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  tags: ForunType;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  video?: Maybe<Scalars['String']>;
};


export type ForumCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ForumDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ForumHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ForumImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ForumPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ForumScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ForumUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ForumConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ForumWhereUniqueInput;
};

/** A connection to a list of items. */
export type ForumConnection = {
  __typename?: 'ForumConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ForumEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ForumCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  image?: InputMaybe<AssetCreateOneInlineInput>;
  tags: ForunType;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  video?: InputMaybe<Scalars['String']>;
};

export type ForumCreateManyInlineInput = {
  /** Connect multiple existing Forum documents */
  connect?: InputMaybe<Array<ForumWhereUniqueInput>>;
  /** Create and connect multiple existing Forum documents */
  create?: InputMaybe<Array<ForumCreateInput>>;
};

export type ForumCreateOneInlineInput = {
  /** Connect one existing Forum document */
  connect?: InputMaybe<ForumWhereUniqueInput>;
  /** Create and connect one Forum document */
  create?: InputMaybe<ForumCreateInput>;
};

/** An edge in a connection. */
export type ForumEdge = {
  __typename?: 'ForumEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Forum;
};

/** Identifies documents */
export type ForumManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ForumWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ForumWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ForumWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<ForumWhereStageInput>;
  documentInStages_none?: InputMaybe<ForumWhereStageInput>;
  documentInStages_some?: InputMaybe<ForumWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  tags?: InputMaybe<ForunType>;
  /** All values that are contained in given list. */
  tags_in?: InputMaybe<Array<InputMaybe<ForunType>>>;
  /** All values that are not equal to given value. */
  tags_not?: InputMaybe<ForunType>;
  /** All values that are not contained in given list. */
  tags_not_in?: InputMaybe<Array<InputMaybe<ForunType>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  video?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  video_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  video_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  video_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  video_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  video_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  video_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  video_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  video_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  video_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ForumOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TagsAsc = 'tags_ASC',
  TagsDesc = 'tags_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VideoAsc = 'video_ASC',
  VideoDesc = 'video_DESC'
}

export type ForumUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  tags?: InputMaybe<ForunType>;
  title?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<Scalars['String']>;
};

export type ForumUpdateManyInlineInput = {
  /** Connect multiple existing Forum documents */
  connect?: InputMaybe<Array<ForumConnectInput>>;
  /** Create and connect multiple Forum documents */
  create?: InputMaybe<Array<ForumCreateInput>>;
  /** Delete multiple Forum documents */
  delete?: InputMaybe<Array<ForumWhereUniqueInput>>;
  /** Disconnect multiple Forum documents */
  disconnect?: InputMaybe<Array<ForumWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Forum documents */
  set?: InputMaybe<Array<ForumWhereUniqueInput>>;
  /** Update multiple Forum documents */
  update?: InputMaybe<Array<ForumUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Forum documents */
  upsert?: InputMaybe<Array<ForumUpsertWithNestedWhereUniqueInput>>;
};

export type ForumUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<ForunType>;
  title?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<Scalars['String']>;
};

export type ForumUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ForumUpdateManyInput;
  /** Document search */
  where: ForumWhereInput;
};

export type ForumUpdateOneInlineInput = {
  /** Connect existing Forum document */
  connect?: InputMaybe<ForumWhereUniqueInput>;
  /** Create and connect one Forum document */
  create?: InputMaybe<ForumCreateInput>;
  /** Delete currently connected Forum document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Forum document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Forum document */
  update?: InputMaybe<ForumUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Forum document */
  upsert?: InputMaybe<ForumUpsertWithNestedWhereUniqueInput>;
};

export type ForumUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ForumUpdateInput;
  /** Unique document search */
  where: ForumWhereUniqueInput;
};

export type ForumUpsertInput = {
  /** Create document if it didn't exist */
  create: ForumCreateInput;
  /** Update document if it exists */
  update: ForumUpdateInput;
};

export type ForumUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ForumUpsertInput;
  /** Unique document search */
  where: ForumWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ForumWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ForumWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ForumWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ForumWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ForumWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<ForumWhereStageInput>;
  documentInStages_none?: InputMaybe<ForumWhereStageInput>;
  documentInStages_some?: InputMaybe<ForumWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  tags?: InputMaybe<ForunType>;
  /** All values that are contained in given list. */
  tags_in?: InputMaybe<Array<InputMaybe<ForunType>>>;
  /** All values that are not equal to given value. */
  tags_not?: InputMaybe<ForunType>;
  /** All values that are not contained in given list. */
  tags_not_in?: InputMaybe<Array<InputMaybe<ForunType>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  video?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  video_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  video_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  video_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  video_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  video_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  video_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  video_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  video_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  video_starts_with?: InputMaybe<Scalars['String']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ForumWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ForumWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ForumWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ForumWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ForumWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Forum record uniquely */
export type ForumWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum ForunType {
  Empreendedorismo = 'empreendedorismo',
  Estudo = 'estudo',
  Medicina = 'medicina'
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

export type Lesson = Node & {
  __typename?: 'Lesson';
  availableAt?: Maybe<Scalars['DateTime']>;
  challenge?: Maybe<Challenge>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Lesson>;
  /** List of Lesson versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  lessonType: LessonType;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  teacher?: Maybe<Teacher>;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** The ID of the Youtube video. */
  videoId: Scalars['String'];
};


export type LessonChallengeArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LessonCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LessonDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type LessonHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type LessonPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LessonScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type LessonTeacherArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LessonUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type LessonConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: LessonWhereUniqueInput;
};

/** A connection to a list of items. */
export type LessonConnection = {
  __typename?: 'LessonConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LessonEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LessonCreateInput = {
  availableAt?: InputMaybe<Scalars['DateTime']>;
  challenge?: InputMaybe<ChallengeCreateOneInlineInput>;
  cl51etyge1n4901ugd6f335m7?: InputMaybe<FeedbackCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  lessonType: LessonType;
  slug?: InputMaybe<Scalars['String']>;
  teacher?: InputMaybe<TeacherCreateOneInlineInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  videoId: Scalars['String'];
};

export type LessonCreateManyInlineInput = {
  /** Connect multiple existing Lesson documents */
  connect?: InputMaybe<Array<LessonWhereUniqueInput>>;
  /** Create and connect multiple existing Lesson documents */
  create?: InputMaybe<Array<LessonCreateInput>>;
};

export type LessonCreateOneInlineInput = {
  /** Connect one existing Lesson document */
  connect?: InputMaybe<LessonWhereUniqueInput>;
  /** Create and connect one Lesson document */
  create?: InputMaybe<LessonCreateInput>;
};

/** An edge in a connection. */
export type LessonEdge = {
  __typename?: 'LessonEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Lesson;
};

/** Identifies documents */
export type LessonManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LessonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LessonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LessonWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  availableAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  availableAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  availableAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  availableAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  availableAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  availableAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  availableAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  availableAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  challenge?: InputMaybe<ChallengeWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<LessonWhereStageInput>;
  documentInStages_none?: InputMaybe<LessonWhereStageInput>;
  documentInStages_some?: InputMaybe<LessonWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  lessonType?: InputMaybe<LessonType>;
  /** All values that are contained in given list. */
  lessonType_in?: InputMaybe<Array<InputMaybe<LessonType>>>;
  /** All values that are not equal to given value. */
  lessonType_not?: InputMaybe<LessonType>;
  /** All values that are not contained in given list. */
  lessonType_not_in?: InputMaybe<Array<InputMaybe<LessonType>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  teacher?: InputMaybe<TeacherWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  videoId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  videoId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  videoId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  videoId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  videoId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  videoId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  videoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  videoId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  videoId_starts_with?: InputMaybe<Scalars['String']>;
};

export enum LessonOrderByInput {
  AvailableAtAsc = 'availableAt_ASC',
  AvailableAtDesc = 'availableAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LessonTypeAsc = 'lessonType_ASC',
  LessonTypeDesc = 'lessonType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VideoIdAsc = 'videoId_ASC',
  VideoIdDesc = 'videoId_DESC'
}

export enum LessonType {
  Class = 'class',
  Live = 'live'
}

export type LessonUpdateInput = {
  availableAt?: InputMaybe<Scalars['DateTime']>;
  challenge?: InputMaybe<ChallengeUpdateOneInlineInput>;
  cl51etyge1n4901ugd6f335m7?: InputMaybe<FeedbackUpdateManyInlineInput>;
  description?: InputMaybe<Scalars['String']>;
  lessonType?: InputMaybe<LessonType>;
  slug?: InputMaybe<Scalars['String']>;
  teacher?: InputMaybe<TeacherUpdateOneInlineInput>;
  title?: InputMaybe<Scalars['String']>;
  videoId?: InputMaybe<Scalars['String']>;
};

export type LessonUpdateManyInlineInput = {
  /** Connect multiple existing Lesson documents */
  connect?: InputMaybe<Array<LessonConnectInput>>;
  /** Create and connect multiple Lesson documents */
  create?: InputMaybe<Array<LessonCreateInput>>;
  /** Delete multiple Lesson documents */
  delete?: InputMaybe<Array<LessonWhereUniqueInput>>;
  /** Disconnect multiple Lesson documents */
  disconnect?: InputMaybe<Array<LessonWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Lesson documents */
  set?: InputMaybe<Array<LessonWhereUniqueInput>>;
  /** Update multiple Lesson documents */
  update?: InputMaybe<Array<LessonUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Lesson documents */
  upsert?: InputMaybe<Array<LessonUpsertWithNestedWhereUniqueInput>>;
};

export type LessonUpdateManyInput = {
  availableAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  lessonType?: InputMaybe<LessonType>;
  title?: InputMaybe<Scalars['String']>;
  videoId?: InputMaybe<Scalars['String']>;
};

export type LessonUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LessonUpdateManyInput;
  /** Document search */
  where: LessonWhereInput;
};

export type LessonUpdateOneInlineInput = {
  /** Connect existing Lesson document */
  connect?: InputMaybe<LessonWhereUniqueInput>;
  /** Create and connect one Lesson document */
  create?: InputMaybe<LessonCreateInput>;
  /** Delete currently connected Lesson document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Lesson document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Lesson document */
  update?: InputMaybe<LessonUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Lesson document */
  upsert?: InputMaybe<LessonUpsertWithNestedWhereUniqueInput>;
};

export type LessonUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LessonUpdateInput;
  /** Unique document search */
  where: LessonWhereUniqueInput;
};

export type LessonUpsertInput = {
  /** Create document if it didn't exist */
  create: LessonCreateInput;
  /** Update document if it exists */
  update: LessonUpdateInput;
};

export type LessonUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LessonUpsertInput;
  /** Unique document search */
  where: LessonWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type LessonWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type LessonWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LessonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LessonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LessonWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  availableAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  availableAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  availableAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  availableAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  availableAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  availableAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  availableAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  availableAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  challenge?: InputMaybe<ChallengeWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<LessonWhereStageInput>;
  documentInStages_none?: InputMaybe<LessonWhereStageInput>;
  documentInStages_some?: InputMaybe<LessonWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  lessonType?: InputMaybe<LessonType>;
  /** All values that are contained in given list. */
  lessonType_in?: InputMaybe<Array<InputMaybe<LessonType>>>;
  /** All values that are not equal to given value. */
  lessonType_not?: InputMaybe<LessonType>;
  /** All values that are not contained in given list. */
  lessonType_not_in?: InputMaybe<Array<InputMaybe<LessonType>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  teacher?: InputMaybe<TeacherWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  videoId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  videoId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  videoId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  videoId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  videoId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  videoId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  videoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  videoId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  videoId_starts_with?: InputMaybe<Scalars['String']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type LessonWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LessonWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LessonWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LessonWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<LessonWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Lesson record uniquely */
export type LessonWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Lessonev = Node & {
  __typename?: 'Lessonev';
  availableAt?: Maybe<Scalars['DateTime']>;
  challenge?: Maybe<Challenge>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Lessonev>;
  /** List of Lessonev versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  lessonType: LessonType;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  teacher?: Maybe<Teacher>;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** The ID of the Youtube video. */
  videoId: Scalars['String'];
};


export type LessonevChallengeArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LessonevCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LessonevDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type LessonevHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type LessonevPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LessonevScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type LessonevTeacherArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LessonevUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type LessonevConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: LessonevWhereUniqueInput;
};

/** A connection to a list of items. */
export type LessonevConnection = {
  __typename?: 'LessonevConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LessonevEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LessonevCreateInput = {
  availableAt?: InputMaybe<Scalars['DateTime']>;
  challenge?: InputMaybe<ChallengeCreateOneInlineInput>;
  cl65j3wb0964901utgn9k5w01?: InputMaybe<FeedbackCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  lessonType: LessonType;
  slug?: InputMaybe<Scalars['String']>;
  teacher?: InputMaybe<TeacherCreateOneInlineInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  videoId: Scalars['String'];
};

export type LessonevCreateManyInlineInput = {
  /** Connect multiple existing Lessonev documents */
  connect?: InputMaybe<Array<LessonevWhereUniqueInput>>;
  /** Create and connect multiple existing Lessonev documents */
  create?: InputMaybe<Array<LessonevCreateInput>>;
};

export type LessonevCreateOneInlineInput = {
  /** Connect one existing Lessonev document */
  connect?: InputMaybe<LessonevWhereUniqueInput>;
  /** Create and connect one Lessonev document */
  create?: InputMaybe<LessonevCreateInput>;
};

/** An edge in a connection. */
export type LessonevEdge = {
  __typename?: 'LessonevEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Lessonev;
};

/** Identifies documents */
export type LessonevManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LessonevWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LessonevWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LessonevWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  availableAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  availableAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  availableAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  availableAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  availableAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  availableAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  availableAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  availableAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  challenge?: InputMaybe<ChallengeWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<LessonevWhereStageInput>;
  documentInStages_none?: InputMaybe<LessonevWhereStageInput>;
  documentInStages_some?: InputMaybe<LessonevWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  lessonType?: InputMaybe<LessonType>;
  /** All values that are contained in given list. */
  lessonType_in?: InputMaybe<Array<InputMaybe<LessonType>>>;
  /** All values that are not equal to given value. */
  lessonType_not?: InputMaybe<LessonType>;
  /** All values that are not contained in given list. */
  lessonType_not_in?: InputMaybe<Array<InputMaybe<LessonType>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  teacher?: InputMaybe<TeacherWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  videoId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  videoId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  videoId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  videoId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  videoId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  videoId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  videoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  videoId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  videoId_starts_with?: InputMaybe<Scalars['String']>;
};

export enum LessonevOrderByInput {
  AvailableAtAsc = 'availableAt_ASC',
  AvailableAtDesc = 'availableAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LessonTypeAsc = 'lessonType_ASC',
  LessonTypeDesc = 'lessonType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VideoIdAsc = 'videoId_ASC',
  VideoIdDesc = 'videoId_DESC'
}

export type LessonevUpdateInput = {
  availableAt?: InputMaybe<Scalars['DateTime']>;
  challenge?: InputMaybe<ChallengeUpdateOneInlineInput>;
  cl65j3wb0964901utgn9k5w01?: InputMaybe<FeedbackUpdateManyInlineInput>;
  description?: InputMaybe<Scalars['String']>;
  lessonType?: InputMaybe<LessonType>;
  slug?: InputMaybe<Scalars['String']>;
  teacher?: InputMaybe<TeacherUpdateOneInlineInput>;
  title?: InputMaybe<Scalars['String']>;
  videoId?: InputMaybe<Scalars['String']>;
};

export type LessonevUpdateManyInlineInput = {
  /** Connect multiple existing Lessonev documents */
  connect?: InputMaybe<Array<LessonevConnectInput>>;
  /** Create and connect multiple Lessonev documents */
  create?: InputMaybe<Array<LessonevCreateInput>>;
  /** Delete multiple Lessonev documents */
  delete?: InputMaybe<Array<LessonevWhereUniqueInput>>;
  /** Disconnect multiple Lessonev documents */
  disconnect?: InputMaybe<Array<LessonevWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Lessonev documents */
  set?: InputMaybe<Array<LessonevWhereUniqueInput>>;
  /** Update multiple Lessonev documents */
  update?: InputMaybe<Array<LessonevUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Lessonev documents */
  upsert?: InputMaybe<Array<LessonevUpsertWithNestedWhereUniqueInput>>;
};

export type LessonevUpdateManyInput = {
  availableAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  lessonType?: InputMaybe<LessonType>;
  title?: InputMaybe<Scalars['String']>;
  videoId?: InputMaybe<Scalars['String']>;
};

export type LessonevUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LessonevUpdateManyInput;
  /** Document search */
  where: LessonevWhereInput;
};

export type LessonevUpdateOneInlineInput = {
  /** Connect existing Lessonev document */
  connect?: InputMaybe<LessonevWhereUniqueInput>;
  /** Create and connect one Lessonev document */
  create?: InputMaybe<LessonevCreateInput>;
  /** Delete currently connected Lessonev document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Lessonev document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Lessonev document */
  update?: InputMaybe<LessonevUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Lessonev document */
  upsert?: InputMaybe<LessonevUpsertWithNestedWhereUniqueInput>;
};

export type LessonevUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LessonevUpdateInput;
  /** Unique document search */
  where: LessonevWhereUniqueInput;
};

export type LessonevUpsertInput = {
  /** Create document if it didn't exist */
  create: LessonevCreateInput;
  /** Update document if it exists */
  update: LessonevUpdateInput;
};

export type LessonevUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LessonevUpsertInput;
  /** Unique document search */
  where: LessonevWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type LessonevWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type LessonevWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LessonevWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LessonevWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LessonevWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  availableAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  availableAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  availableAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  availableAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  availableAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  availableAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  availableAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  availableAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  challenge?: InputMaybe<ChallengeWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<LessonevWhereStageInput>;
  documentInStages_none?: InputMaybe<LessonevWhereStageInput>;
  documentInStages_some?: InputMaybe<LessonevWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  lessonType?: InputMaybe<LessonType>;
  /** All values that are contained in given list. */
  lessonType_in?: InputMaybe<Array<InputMaybe<LessonType>>>;
  /** All values that are not equal to given value. */
  lessonType_not?: InputMaybe<LessonType>;
  /** All values that are not contained in given list. */
  lessonType_not_in?: InputMaybe<Array<InputMaybe<LessonType>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  teacher?: InputMaybe<TeacherWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  videoId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  videoId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  videoId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  videoId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  videoId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  videoId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  videoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  videoId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  videoId_starts_with?: InputMaybe<Scalars['String']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type LessonevWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LessonevWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LessonevWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LessonevWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<LessonevWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Lessonev record uniquely */
export type LessonevWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Lessonfo = Node & {
  __typename?: 'Lessonfo';
  availableAt?: Maybe<Scalars['DateTime']>;
  challenge?: Maybe<Challenge>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Lessonfo>;
  /** List of Lessonfo versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  lessonType?: Maybe<LessonType>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  teacher?: Maybe<Teacher>;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** The ID of the Youtube video. */
  videoId?: Maybe<Scalars['String']>;
};


export type LessonfoChallengeArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LessonfoCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LessonfoDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type LessonfoHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type LessonfoPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LessonfoScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type LessonfoTeacherArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type LessonfoUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type LessonfoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: LessonfoWhereUniqueInput;
};

/** A connection to a list of items. */
export type LessonfoConnection = {
  __typename?: 'LessonfoConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LessonfoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LessonfoCreateInput = {
  availableAt?: InputMaybe<Scalars['DateTime']>;
  challenge?: InputMaybe<ChallengeCreateOneInlineInput>;
  cl67kmqzgbvf601ukbjtd4bkb?: InputMaybe<FeedbackCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  lessonType?: InputMaybe<LessonType>;
  slug?: InputMaybe<Scalars['String']>;
  teacher?: InputMaybe<TeacherCreateOneInlineInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  videoId?: InputMaybe<Scalars['String']>;
};

export type LessonfoCreateManyInlineInput = {
  /** Connect multiple existing Lessonfo documents */
  connect?: InputMaybe<Array<LessonfoWhereUniqueInput>>;
  /** Create and connect multiple existing Lessonfo documents */
  create?: InputMaybe<Array<LessonfoCreateInput>>;
};

export type LessonfoCreateOneInlineInput = {
  /** Connect one existing Lessonfo document */
  connect?: InputMaybe<LessonfoWhereUniqueInput>;
  /** Create and connect one Lessonfo document */
  create?: InputMaybe<LessonfoCreateInput>;
};

/** An edge in a connection. */
export type LessonfoEdge = {
  __typename?: 'LessonfoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Lessonfo;
};

/** Identifies documents */
export type LessonfoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LessonfoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LessonfoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LessonfoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  availableAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  availableAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  availableAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  availableAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  availableAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  availableAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  availableAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  availableAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  challenge?: InputMaybe<ChallengeWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<LessonfoWhereStageInput>;
  documentInStages_none?: InputMaybe<LessonfoWhereStageInput>;
  documentInStages_some?: InputMaybe<LessonfoWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  lessonType?: InputMaybe<LessonType>;
  /** All values that are contained in given list. */
  lessonType_in?: InputMaybe<Array<InputMaybe<LessonType>>>;
  /** All values that are not equal to given value. */
  lessonType_not?: InputMaybe<LessonType>;
  /** All values that are not contained in given list. */
  lessonType_not_in?: InputMaybe<Array<InputMaybe<LessonType>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  teacher?: InputMaybe<TeacherWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  videoId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  videoId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  videoId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  videoId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  videoId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  videoId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  videoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  videoId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  videoId_starts_with?: InputMaybe<Scalars['String']>;
};

export enum LessonfoOrderByInput {
  AvailableAtAsc = 'availableAt_ASC',
  AvailableAtDesc = 'availableAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LessonTypeAsc = 'lessonType_ASC',
  LessonTypeDesc = 'lessonType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VideoIdAsc = 'videoId_ASC',
  VideoIdDesc = 'videoId_DESC'
}

export type LessonfoUpdateInput = {
  availableAt?: InputMaybe<Scalars['DateTime']>;
  challenge?: InputMaybe<ChallengeUpdateOneInlineInput>;
  cl67kmqzgbvf601ukbjtd4bkb?: InputMaybe<FeedbackUpdateManyInlineInput>;
  description?: InputMaybe<Scalars['String']>;
  lessonType?: InputMaybe<LessonType>;
  slug?: InputMaybe<Scalars['String']>;
  teacher?: InputMaybe<TeacherUpdateOneInlineInput>;
  title?: InputMaybe<Scalars['String']>;
  videoId?: InputMaybe<Scalars['String']>;
};

export type LessonfoUpdateManyInlineInput = {
  /** Connect multiple existing Lessonfo documents */
  connect?: InputMaybe<Array<LessonfoConnectInput>>;
  /** Create and connect multiple Lessonfo documents */
  create?: InputMaybe<Array<LessonfoCreateInput>>;
  /** Delete multiple Lessonfo documents */
  delete?: InputMaybe<Array<LessonfoWhereUniqueInput>>;
  /** Disconnect multiple Lessonfo documents */
  disconnect?: InputMaybe<Array<LessonfoWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Lessonfo documents */
  set?: InputMaybe<Array<LessonfoWhereUniqueInput>>;
  /** Update multiple Lessonfo documents */
  update?: InputMaybe<Array<LessonfoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Lessonfo documents */
  upsert?: InputMaybe<Array<LessonfoUpsertWithNestedWhereUniqueInput>>;
};

export type LessonfoUpdateManyInput = {
  availableAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  lessonType?: InputMaybe<LessonType>;
  title?: InputMaybe<Scalars['String']>;
  videoId?: InputMaybe<Scalars['String']>;
};

export type LessonfoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LessonfoUpdateManyInput;
  /** Document search */
  where: LessonfoWhereInput;
};

export type LessonfoUpdateOneInlineInput = {
  /** Connect existing Lessonfo document */
  connect?: InputMaybe<LessonfoWhereUniqueInput>;
  /** Create and connect one Lessonfo document */
  create?: InputMaybe<LessonfoCreateInput>;
  /** Delete currently connected Lessonfo document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Lessonfo document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Lessonfo document */
  update?: InputMaybe<LessonfoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Lessonfo document */
  upsert?: InputMaybe<LessonfoUpsertWithNestedWhereUniqueInput>;
};

export type LessonfoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LessonfoUpdateInput;
  /** Unique document search */
  where: LessonfoWhereUniqueInput;
};

export type LessonfoUpsertInput = {
  /** Create document if it didn't exist */
  create: LessonfoCreateInput;
  /** Update document if it exists */
  update: LessonfoUpdateInput;
};

export type LessonfoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LessonfoUpsertInput;
  /** Unique document search */
  where: LessonfoWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type LessonfoWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type LessonfoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LessonfoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LessonfoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LessonfoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  availableAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  availableAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  availableAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  availableAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  availableAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  availableAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  availableAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  availableAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  challenge?: InputMaybe<ChallengeWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<LessonfoWhereStageInput>;
  documentInStages_none?: InputMaybe<LessonfoWhereStageInput>;
  documentInStages_some?: InputMaybe<LessonfoWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  lessonType?: InputMaybe<LessonType>;
  /** All values that are contained in given list. */
  lessonType_in?: InputMaybe<Array<InputMaybe<LessonType>>>;
  /** All values that are not equal to given value. */
  lessonType_not?: InputMaybe<LessonType>;
  /** All values that are not contained in given list. */
  lessonType_not_in?: InputMaybe<Array<InputMaybe<LessonType>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  teacher?: InputMaybe<TeacherWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  videoId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  videoId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  videoId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  videoId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  videoId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  videoId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  videoId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  videoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  videoId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  videoId_starts_with?: InputMaybe<Scalars['String']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type LessonfoWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LessonfoWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LessonfoWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LessonfoWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<LessonfoWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Lessonfo record uniquely */
export type LessonfoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one alimento */
  createAlimento?: Maybe<Alimento>;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one autropometria */
  createAutropometria?: Maybe<Autropometria>;
  /** Create one challenge */
  createChallenge?: Maybe<Challenge>;
  /** Create one condulta */
  createCondulta?: Maybe<Condulta>;
  /** Create one consulta */
  createConsulta?: Maybe<Consulta>;
  /** Create one feedback */
  createFeedback?: Maybe<Feedback>;
  /** Create one forum */
  createForum?: Maybe<Forum>;
  /** Create one lesson */
  createLesson?: Maybe<Lesson>;
  /** Create one lessonev */
  createLessonev?: Maybe<Lessonev>;
  /** Create one lessonfo */
  createLessonfo?: Maybe<Lessonfo>;
  /** Create one orientacao */
  createOrientacao?: Maybe<Orientacao>;
  /** Create one product */
  createProduct?: Maybe<Product>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one subscriber */
  createSubscriber?: Maybe<Subscriber>;
  /** Create one suplemento */
  createSuplemento?: Maybe<Suplemento>;
  /** Create one teacher */
  createTeacher?: Maybe<Teacher>;
  /** Delete one alimento from _all_ existing stages. Returns deleted document. */
  deleteAlimento?: Maybe<Alimento>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one autropometria from _all_ existing stages. Returns deleted document. */
  deleteAutropometria?: Maybe<Autropometria>;
  /** Delete one challenge from _all_ existing stages. Returns deleted document. */
  deleteChallenge?: Maybe<Challenge>;
  /** Delete one condulta from _all_ existing stages. Returns deleted document. */
  deleteCondulta?: Maybe<Condulta>;
  /** Delete one consulta from _all_ existing stages. Returns deleted document. */
  deleteConsulta?: Maybe<Consulta>;
  /** Delete one feedback from _all_ existing stages. Returns deleted document. */
  deleteFeedback?: Maybe<Feedback>;
  /** Delete one forum from _all_ existing stages. Returns deleted document. */
  deleteForum?: Maybe<Forum>;
  /** Delete one lesson from _all_ existing stages. Returns deleted document. */
  deleteLesson?: Maybe<Lesson>;
  /** Delete one lessonev from _all_ existing stages. Returns deleted document. */
  deleteLessonev?: Maybe<Lessonev>;
  /** Delete one lessonfo from _all_ existing stages. Returns deleted document. */
  deleteLessonfo?: Maybe<Lessonfo>;
  /**
   * Delete many Alimento documents
   * @deprecated Please use the new paginated many mutation (deleteManyAlimentosConnection)
   */
  deleteManyAlimentos: BatchPayload;
  /** Delete many Alimento documents, return deleted documents */
  deleteManyAlimentosConnection: AlimentoConnection;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Autropometria documents
   * @deprecated Please use the new paginated many mutation (deleteManyAutropometriasConnection)
   */
  deleteManyAutropometrias: BatchPayload;
  /** Delete many Autropometria documents, return deleted documents */
  deleteManyAutropometriasConnection: AutropometriaConnection;
  /**
   * Delete many Challenge documents
   * @deprecated Please use the new paginated many mutation (deleteManyChallengesConnection)
   */
  deleteManyChallenges: BatchPayload;
  /** Delete many Challenge documents, return deleted documents */
  deleteManyChallengesConnection: ChallengeConnection;
  /**
   * Delete many Condulta documents
   * @deprecated Please use the new paginated many mutation (deleteManyCondultasConnection)
   */
  deleteManyCondultas: BatchPayload;
  /** Delete many Condulta documents, return deleted documents */
  deleteManyCondultasConnection: CondultaConnection;
  /**
   * Delete many Consulta documents
   * @deprecated Please use the new paginated many mutation (deleteManyConsultasConnection)
   */
  deleteManyConsultas: BatchPayload;
  /** Delete many Consulta documents, return deleted documents */
  deleteManyConsultasConnection: ConsultaConnection;
  /**
   * Delete many Feedback documents
   * @deprecated Please use the new paginated many mutation (deleteManyFeedbacksConnection)
   */
  deleteManyFeedbacks: BatchPayload;
  /** Delete many Feedback documents, return deleted documents */
  deleteManyFeedbacksConnection: FeedbackConnection;
  /**
   * Delete many Forum documents
   * @deprecated Please use the new paginated many mutation (deleteManyForumsConnection)
   */
  deleteManyForums: BatchPayload;
  /** Delete many Forum documents, return deleted documents */
  deleteManyForumsConnection: ForumConnection;
  /**
   * Delete many Lesson documents
   * @deprecated Please use the new paginated many mutation (deleteManyLessonsConnection)
   */
  deleteManyLessons: BatchPayload;
  /** Delete many Lesson documents, return deleted documents */
  deleteManyLessonsConnection: LessonConnection;
  /**
   * Delete many Lessonev documents
   * @deprecated Please use the new paginated many mutation (deleteManyLessonsevConnection)
   */
  deleteManyLessonsev: BatchPayload;
  /** Delete many Lessonev documents, return deleted documents */
  deleteManyLessonsevConnection: LessonevConnection;
  /**
   * Delete many Lessonfo documents
   * @deprecated Please use the new paginated many mutation (deleteManyLessonsfoConnection)
   */
  deleteManyLessonsfo: BatchPayload;
  /** Delete many Lessonfo documents, return deleted documents */
  deleteManyLessonsfoConnection: LessonfoConnection;
  /**
   * Delete many Orientacao documents
   * @deprecated Please use the new paginated many mutation (deleteManyOrientacaosConnection)
   */
  deleteManyOrientacaos: BatchPayload;
  /** Delete many Orientacao documents, return deleted documents */
  deleteManyOrientacaosConnection: OrientacaoConnection;
  /**
   * Delete many Product documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductsConnection)
   */
  deleteManyProducts: BatchPayload;
  /** Delete many Product documents, return deleted documents */
  deleteManyProductsConnection: ProductConnection;
  /**
   * Delete many Subscriber documents
   * @deprecated Please use the new paginated many mutation (deleteManySubscribersConnection)
   */
  deleteManySubscribers: BatchPayload;
  /** Delete many Subscriber documents, return deleted documents */
  deleteManySubscribersConnection: SubscriberConnection;
  /**
   * Delete many Suplemento documents
   * @deprecated Please use the new paginated many mutation (deleteManySuplementosConnection)
   */
  deleteManySuplementos: BatchPayload;
  /** Delete many Suplemento documents, return deleted documents */
  deleteManySuplementosConnection: SuplementoConnection;
  /**
   * Delete many Teacher documents
   * @deprecated Please use the new paginated many mutation (deleteManyTeachersConnection)
   */
  deleteManyTeachers: BatchPayload;
  /** Delete many Teacher documents, return deleted documents */
  deleteManyTeachersConnection: TeacherConnection;
  /** Delete one orientacao from _all_ existing stages. Returns deleted document. */
  deleteOrientacao?: Maybe<Orientacao>;
  /** Delete one product from _all_ existing stages. Returns deleted document. */
  deleteProduct?: Maybe<Product>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one subscriber from _all_ existing stages. Returns deleted document. */
  deleteSubscriber?: Maybe<Subscriber>;
  /** Delete one suplemento from _all_ existing stages. Returns deleted document. */
  deleteSuplemento?: Maybe<Suplemento>;
  /** Delete one teacher from _all_ existing stages. Returns deleted document. */
  deleteTeacher?: Maybe<Teacher>;
  /** Publish one alimento */
  publishAlimento?: Maybe<Alimento>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one autropometria */
  publishAutropometria?: Maybe<Autropometria>;
  /** Publish one challenge */
  publishChallenge?: Maybe<Challenge>;
  /** Publish one condulta */
  publishCondulta?: Maybe<Condulta>;
  /** Publish one consulta */
  publishConsulta?: Maybe<Consulta>;
  /** Publish one feedback */
  publishFeedback?: Maybe<Feedback>;
  /** Publish one forum */
  publishForum?: Maybe<Forum>;
  /** Publish one lesson */
  publishLesson?: Maybe<Lesson>;
  /** Publish one lessonev */
  publishLessonev?: Maybe<Lessonev>;
  /** Publish one lessonfo */
  publishLessonfo?: Maybe<Lessonfo>;
  /**
   * Publish many Alimento documents
   * @deprecated Please use the new paginated many mutation (publishManyAlimentosConnection)
   */
  publishManyAlimentos: BatchPayload;
  /** Publish many Alimento documents */
  publishManyAlimentosConnection: AlimentoConnection;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Autropometria documents
   * @deprecated Please use the new paginated many mutation (publishManyAutropometriasConnection)
   */
  publishManyAutropometrias: BatchPayload;
  /** Publish many Autropometria documents */
  publishManyAutropometriasConnection: AutropometriaConnection;
  /**
   * Publish many Challenge documents
   * @deprecated Please use the new paginated many mutation (publishManyChallengesConnection)
   */
  publishManyChallenges: BatchPayload;
  /** Publish many Challenge documents */
  publishManyChallengesConnection: ChallengeConnection;
  /**
   * Publish many Condulta documents
   * @deprecated Please use the new paginated many mutation (publishManyCondultasConnection)
   */
  publishManyCondultas: BatchPayload;
  /** Publish many Condulta documents */
  publishManyCondultasConnection: CondultaConnection;
  /**
   * Publish many Consulta documents
   * @deprecated Please use the new paginated many mutation (publishManyConsultasConnection)
   */
  publishManyConsultas: BatchPayload;
  /** Publish many Consulta documents */
  publishManyConsultasConnection: ConsultaConnection;
  /**
   * Publish many Feedback documents
   * @deprecated Please use the new paginated many mutation (publishManyFeedbacksConnection)
   */
  publishManyFeedbacks: BatchPayload;
  /** Publish many Feedback documents */
  publishManyFeedbacksConnection: FeedbackConnection;
  /**
   * Publish many Forum documents
   * @deprecated Please use the new paginated many mutation (publishManyForumsConnection)
   */
  publishManyForums: BatchPayload;
  /** Publish many Forum documents */
  publishManyForumsConnection: ForumConnection;
  /**
   * Publish many Lesson documents
   * @deprecated Please use the new paginated many mutation (publishManyLessonsConnection)
   */
  publishManyLessons: BatchPayload;
  /** Publish many Lesson documents */
  publishManyLessonsConnection: LessonConnection;
  /**
   * Publish many Lessonev documents
   * @deprecated Please use the new paginated many mutation (publishManyLessonsevConnection)
   */
  publishManyLessonsev: BatchPayload;
  /** Publish many Lessonev documents */
  publishManyLessonsevConnection: LessonevConnection;
  /**
   * Publish many Lessonfo documents
   * @deprecated Please use the new paginated many mutation (publishManyLessonsfoConnection)
   */
  publishManyLessonsfo: BatchPayload;
  /** Publish many Lessonfo documents */
  publishManyLessonsfoConnection: LessonfoConnection;
  /**
   * Publish many Orientacao documents
   * @deprecated Please use the new paginated many mutation (publishManyOrientacaosConnection)
   */
  publishManyOrientacaos: BatchPayload;
  /** Publish many Orientacao documents */
  publishManyOrientacaosConnection: OrientacaoConnection;
  /**
   * Publish many Product documents
   * @deprecated Please use the new paginated many mutation (publishManyProductsConnection)
   */
  publishManyProducts: BatchPayload;
  /** Publish many Product documents */
  publishManyProductsConnection: ProductConnection;
  /**
   * Publish many Subscriber documents
   * @deprecated Please use the new paginated many mutation (publishManySubscribersConnection)
   */
  publishManySubscribers: BatchPayload;
  /** Publish many Subscriber documents */
  publishManySubscribersConnection: SubscriberConnection;
  /**
   * Publish many Suplemento documents
   * @deprecated Please use the new paginated many mutation (publishManySuplementosConnection)
   */
  publishManySuplementos: BatchPayload;
  /** Publish many Suplemento documents */
  publishManySuplementosConnection: SuplementoConnection;
  /**
   * Publish many Teacher documents
   * @deprecated Please use the new paginated many mutation (publishManyTeachersConnection)
   */
  publishManyTeachers: BatchPayload;
  /** Publish many Teacher documents */
  publishManyTeachersConnection: TeacherConnection;
  /** Publish one orientacao */
  publishOrientacao?: Maybe<Orientacao>;
  /** Publish one product */
  publishProduct?: Maybe<Product>;
  /** Publish one subscriber */
  publishSubscriber?: Maybe<Subscriber>;
  /** Publish one suplemento */
  publishSuplemento?: Maybe<Suplemento>;
  /** Publish one teacher */
  publishTeacher?: Maybe<Teacher>;
  /** Schedule to publish one alimento */
  schedulePublishAlimento?: Maybe<Alimento>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one autropometria */
  schedulePublishAutropometria?: Maybe<Autropometria>;
  /** Schedule to publish one challenge */
  schedulePublishChallenge?: Maybe<Challenge>;
  /** Schedule to publish one condulta */
  schedulePublishCondulta?: Maybe<Condulta>;
  /** Schedule to publish one consulta */
  schedulePublishConsulta?: Maybe<Consulta>;
  /** Schedule to publish one feedback */
  schedulePublishFeedback?: Maybe<Feedback>;
  /** Schedule to publish one forum */
  schedulePublishForum?: Maybe<Forum>;
  /** Schedule to publish one lesson */
  schedulePublishLesson?: Maybe<Lesson>;
  /** Schedule to publish one lessonev */
  schedulePublishLessonev?: Maybe<Lessonev>;
  /** Schedule to publish one lessonfo */
  schedulePublishLessonfo?: Maybe<Lessonfo>;
  /** Schedule to publish one orientacao */
  schedulePublishOrientacao?: Maybe<Orientacao>;
  /** Schedule to publish one product */
  schedulePublishProduct?: Maybe<Product>;
  /** Schedule to publish one subscriber */
  schedulePublishSubscriber?: Maybe<Subscriber>;
  /** Schedule to publish one suplemento */
  schedulePublishSuplemento?: Maybe<Suplemento>;
  /** Schedule to publish one teacher */
  schedulePublishTeacher?: Maybe<Teacher>;
  /** Unpublish one alimento from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAlimento?: Maybe<Alimento>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one autropometria from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAutropometria?: Maybe<Autropometria>;
  /** Unpublish one challenge from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishChallenge?: Maybe<Challenge>;
  /** Unpublish one condulta from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCondulta?: Maybe<Condulta>;
  /** Unpublish one consulta from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishConsulta?: Maybe<Consulta>;
  /** Unpublish one feedback from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishFeedback?: Maybe<Feedback>;
  /** Unpublish one forum from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishForum?: Maybe<Forum>;
  /** Unpublish one lesson from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishLesson?: Maybe<Lesson>;
  /** Unpublish one lessonev from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishLessonev?: Maybe<Lessonev>;
  /** Unpublish one lessonfo from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishLessonfo?: Maybe<Lessonfo>;
  /** Unpublish one orientacao from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishOrientacao?: Maybe<Orientacao>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProduct?: Maybe<Product>;
  /** Unpublish one subscriber from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSubscriber?: Maybe<Subscriber>;
  /** Unpublish one suplemento from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSuplemento?: Maybe<Suplemento>;
  /** Unpublish one teacher from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTeacher?: Maybe<Teacher>;
  /** Unpublish one alimento from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAlimento?: Maybe<Alimento>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one autropometria from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAutropometria?: Maybe<Autropometria>;
  /** Unpublish one challenge from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishChallenge?: Maybe<Challenge>;
  /** Unpublish one condulta from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCondulta?: Maybe<Condulta>;
  /** Unpublish one consulta from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishConsulta?: Maybe<Consulta>;
  /** Unpublish one feedback from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFeedback?: Maybe<Feedback>;
  /** Unpublish one forum from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishForum?: Maybe<Forum>;
  /** Unpublish one lesson from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLesson?: Maybe<Lesson>;
  /** Unpublish one lessonev from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLessonev?: Maybe<Lessonev>;
  /** Unpublish one lessonfo from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLessonfo?: Maybe<Lessonfo>;
  /**
   * Unpublish many Alimento documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAlimentosConnection)
   */
  unpublishManyAlimentos: BatchPayload;
  /** Find many Alimento documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAlimentosConnection: AlimentoConnection;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Autropometria documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAutropometriasConnection)
   */
  unpublishManyAutropometrias: BatchPayload;
  /** Find many Autropometria documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAutropometriasConnection: AutropometriaConnection;
  /**
   * Unpublish many Challenge documents
   * @deprecated Please use the new paginated many mutation (unpublishManyChallengesConnection)
   */
  unpublishManyChallenges: BatchPayload;
  /** Find many Challenge documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyChallengesConnection: ChallengeConnection;
  /**
   * Unpublish many Condulta documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCondultasConnection)
   */
  unpublishManyCondultas: BatchPayload;
  /** Find many Condulta documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCondultasConnection: CondultaConnection;
  /**
   * Unpublish many Consulta documents
   * @deprecated Please use the new paginated many mutation (unpublishManyConsultasConnection)
   */
  unpublishManyConsultas: BatchPayload;
  /** Find many Consulta documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyConsultasConnection: ConsultaConnection;
  /**
   * Unpublish many Feedback documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFeedbacksConnection)
   */
  unpublishManyFeedbacks: BatchPayload;
  /** Find many Feedback documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFeedbacksConnection: FeedbackConnection;
  /**
   * Unpublish many Forum documents
   * @deprecated Please use the new paginated many mutation (unpublishManyForumsConnection)
   */
  unpublishManyForums: BatchPayload;
  /** Find many Forum documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyForumsConnection: ForumConnection;
  /**
   * Unpublish many Lesson documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLessonsConnection)
   */
  unpublishManyLessons: BatchPayload;
  /** Find many Lesson documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLessonsConnection: LessonConnection;
  /**
   * Unpublish many Lessonev documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLessonsevConnection)
   */
  unpublishManyLessonsev: BatchPayload;
  /** Find many Lessonev documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLessonsevConnection: LessonevConnection;
  /**
   * Unpublish many Lessonfo documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLessonsfoConnection)
   */
  unpublishManyLessonsfo: BatchPayload;
  /** Find many Lessonfo documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLessonsfoConnection: LessonfoConnection;
  /**
   * Unpublish many Orientacao documents
   * @deprecated Please use the new paginated many mutation (unpublishManyOrientacaosConnection)
   */
  unpublishManyOrientacaos: BatchPayload;
  /** Find many Orientacao documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyOrientacaosConnection: OrientacaoConnection;
  /**
   * Unpublish many Product documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductsConnection)
   */
  unpublishManyProducts: BatchPayload;
  /** Find many Product documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductsConnection: ProductConnection;
  /**
   * Unpublish many Subscriber documents
   * @deprecated Please use the new paginated many mutation (unpublishManySubscribersConnection)
   */
  unpublishManySubscribers: BatchPayload;
  /** Find many Subscriber documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySubscribersConnection: SubscriberConnection;
  /**
   * Unpublish many Suplemento documents
   * @deprecated Please use the new paginated many mutation (unpublishManySuplementosConnection)
   */
  unpublishManySuplementos: BatchPayload;
  /** Find many Suplemento documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySuplementosConnection: SuplementoConnection;
  /**
   * Unpublish many Teacher documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTeachersConnection)
   */
  unpublishManyTeachers: BatchPayload;
  /** Find many Teacher documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTeachersConnection: TeacherConnection;
  /** Unpublish one orientacao from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishOrientacao?: Maybe<Orientacao>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProduct?: Maybe<Product>;
  /** Unpublish one subscriber from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSubscriber?: Maybe<Subscriber>;
  /** Unpublish one suplemento from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSuplemento?: Maybe<Suplemento>;
  /** Unpublish one teacher from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTeacher?: Maybe<Teacher>;
  /** Update one alimento */
  updateAlimento?: Maybe<Alimento>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one autropometria */
  updateAutropometria?: Maybe<Autropometria>;
  /** Update one challenge */
  updateChallenge?: Maybe<Challenge>;
  /** Update one condulta */
  updateCondulta?: Maybe<Condulta>;
  /** Update one consulta */
  updateConsulta?: Maybe<Consulta>;
  /** Update one feedback */
  updateFeedback?: Maybe<Feedback>;
  /** Update one forum */
  updateForum?: Maybe<Forum>;
  /** Update one lesson */
  updateLesson?: Maybe<Lesson>;
  /** Update one lessonev */
  updateLessonev?: Maybe<Lessonev>;
  /** Update one lessonfo */
  updateLessonfo?: Maybe<Lessonfo>;
  /**
   * Update many alimentos
   * @deprecated Please use the new paginated many mutation (updateManyAlimentosConnection)
   */
  updateManyAlimentos: BatchPayload;
  /** Update many Alimento documents */
  updateManyAlimentosConnection: AlimentoConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many autropometrias
   * @deprecated Please use the new paginated many mutation (updateManyAutropometriasConnection)
   */
  updateManyAutropometrias: BatchPayload;
  /** Update many Autropometria documents */
  updateManyAutropometriasConnection: AutropometriaConnection;
  /**
   * Update many challenges
   * @deprecated Please use the new paginated many mutation (updateManyChallengesConnection)
   */
  updateManyChallenges: BatchPayload;
  /** Update many Challenge documents */
  updateManyChallengesConnection: ChallengeConnection;
  /**
   * Update many condultas
   * @deprecated Please use the new paginated many mutation (updateManyCondultasConnection)
   */
  updateManyCondultas: BatchPayload;
  /** Update many Condulta documents */
  updateManyCondultasConnection: CondultaConnection;
  /**
   * Update many consultas
   * @deprecated Please use the new paginated many mutation (updateManyConsultasConnection)
   */
  updateManyConsultas: BatchPayload;
  /** Update many Consulta documents */
  updateManyConsultasConnection: ConsultaConnection;
  /**
   * Update many feedbacks
   * @deprecated Please use the new paginated many mutation (updateManyFeedbacksConnection)
   */
  updateManyFeedbacks: BatchPayload;
  /** Update many Feedback documents */
  updateManyFeedbacksConnection: FeedbackConnection;
  /**
   * Update many forums
   * @deprecated Please use the new paginated many mutation (updateManyForumsConnection)
   */
  updateManyForums: BatchPayload;
  /** Update many Forum documents */
  updateManyForumsConnection: ForumConnection;
  /**
   * Update many lessons
   * @deprecated Please use the new paginated many mutation (updateManyLessonsConnection)
   */
  updateManyLessons: BatchPayload;
  /** Update many Lesson documents */
  updateManyLessonsConnection: LessonConnection;
  /**
   * Update many lessonsev
   * @deprecated Please use the new paginated many mutation (updateManyLessonsevConnection)
   */
  updateManyLessonsev: BatchPayload;
  /** Update many Lessonev documents */
  updateManyLessonsevConnection: LessonevConnection;
  /**
   * Update many lessonsfo
   * @deprecated Please use the new paginated many mutation (updateManyLessonsfoConnection)
   */
  updateManyLessonsfo: BatchPayload;
  /** Update many Lessonfo documents */
  updateManyLessonsfoConnection: LessonfoConnection;
  /**
   * Update many orientacaos
   * @deprecated Please use the new paginated many mutation (updateManyOrientacaosConnection)
   */
  updateManyOrientacaos: BatchPayload;
  /** Update many Orientacao documents */
  updateManyOrientacaosConnection: OrientacaoConnection;
  /**
   * Update many products
   * @deprecated Please use the new paginated many mutation (updateManyProductsConnection)
   */
  updateManyProducts: BatchPayload;
  /** Update many Product documents */
  updateManyProductsConnection: ProductConnection;
  /**
   * Update many subscribers
   * @deprecated Please use the new paginated many mutation (updateManySubscribersConnection)
   */
  updateManySubscribers: BatchPayload;
  /** Update many Subscriber documents */
  updateManySubscribersConnection: SubscriberConnection;
  /**
   * Update many suplementos
   * @deprecated Please use the new paginated many mutation (updateManySuplementosConnection)
   */
  updateManySuplementos: BatchPayload;
  /** Update many Suplemento documents */
  updateManySuplementosConnection: SuplementoConnection;
  /**
   * Update many teachers
   * @deprecated Please use the new paginated many mutation (updateManyTeachersConnection)
   */
  updateManyTeachers: BatchPayload;
  /** Update many Teacher documents */
  updateManyTeachersConnection: TeacherConnection;
  /** Update one orientacao */
  updateOrientacao?: Maybe<Orientacao>;
  /** Update one product */
  updateProduct?: Maybe<Product>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one subscriber */
  updateSubscriber?: Maybe<Subscriber>;
  /** Update one suplemento */
  updateSuplemento?: Maybe<Suplemento>;
  /** Update one teacher */
  updateTeacher?: Maybe<Teacher>;
  /** Upsert one alimento */
  upsertAlimento?: Maybe<Alimento>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one autropometria */
  upsertAutropometria?: Maybe<Autropometria>;
  /** Upsert one challenge */
  upsertChallenge?: Maybe<Challenge>;
  /** Upsert one condulta */
  upsertCondulta?: Maybe<Condulta>;
  /** Upsert one consulta */
  upsertConsulta?: Maybe<Consulta>;
  /** Upsert one feedback */
  upsertFeedback?: Maybe<Feedback>;
  /** Upsert one forum */
  upsertForum?: Maybe<Forum>;
  /** Upsert one lesson */
  upsertLesson?: Maybe<Lesson>;
  /** Upsert one lessonev */
  upsertLessonev?: Maybe<Lessonev>;
  /** Upsert one lessonfo */
  upsertLessonfo?: Maybe<Lessonfo>;
  /** Upsert one orientacao */
  upsertOrientacao?: Maybe<Orientacao>;
  /** Upsert one product */
  upsertProduct?: Maybe<Product>;
  /** Upsert one subscriber */
  upsertSubscriber?: Maybe<Subscriber>;
  /** Upsert one suplemento */
  upsertSuplemento?: Maybe<Suplemento>;
  /** Upsert one teacher */
  upsertTeacher?: Maybe<Teacher>;
};


export type MutationCreateAlimentoArgs = {
  data: AlimentoCreateInput;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateAutropometriaArgs = {
  data: AutropometriaCreateInput;
};


export type MutationCreateChallengeArgs = {
  data: ChallengeCreateInput;
};


export type MutationCreateCondultaArgs = {
  data: CondultaCreateInput;
};


export type MutationCreateConsultaArgs = {
  data: ConsultaCreateInput;
};


export type MutationCreateFeedbackArgs = {
  data: FeedbackCreateInput;
};


export type MutationCreateForumArgs = {
  data: ForumCreateInput;
};


export type MutationCreateLessonArgs = {
  data: LessonCreateInput;
};


export type MutationCreateLessonevArgs = {
  data: LessonevCreateInput;
};


export type MutationCreateLessonfoArgs = {
  data: LessonfoCreateInput;
};


export type MutationCreateOrientacaoArgs = {
  data: OrientacaoCreateInput;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateSubscriberArgs = {
  data: SubscriberCreateInput;
};


export type MutationCreateSuplementoArgs = {
  data: SuplementoCreateInput;
};


export type MutationCreateTeacherArgs = {
  data: TeacherCreateInput;
};


export type MutationDeleteAlimentoArgs = {
  where: AlimentoWhereUniqueInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteAutropometriaArgs = {
  where: AutropometriaWhereUniqueInput;
};


export type MutationDeleteChallengeArgs = {
  where: ChallengeWhereUniqueInput;
};


export type MutationDeleteCondultaArgs = {
  where: CondultaWhereUniqueInput;
};


export type MutationDeleteConsultaArgs = {
  where: ConsultaWhereUniqueInput;
};


export type MutationDeleteFeedbackArgs = {
  where: FeedbackWhereUniqueInput;
};


export type MutationDeleteForumArgs = {
  where: ForumWhereUniqueInput;
};


export type MutationDeleteLessonArgs = {
  where: LessonWhereUniqueInput;
};


export type MutationDeleteLessonevArgs = {
  where: LessonevWhereUniqueInput;
};


export type MutationDeleteLessonfoArgs = {
  where: LessonfoWhereUniqueInput;
};


export type MutationDeleteManyAlimentosArgs = {
  where?: InputMaybe<AlimentoManyWhereInput>;
};


export type MutationDeleteManyAlimentosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlimentoManyWhereInput>;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAutropometriasArgs = {
  where?: InputMaybe<AutropometriaManyWhereInput>;
};


export type MutationDeleteManyAutropometriasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AutropometriaManyWhereInput>;
};


export type MutationDeleteManyChallengesArgs = {
  where?: InputMaybe<ChallengeManyWhereInput>;
};


export type MutationDeleteManyChallengesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChallengeManyWhereInput>;
};


export type MutationDeleteManyCondultasArgs = {
  where?: InputMaybe<CondultaManyWhereInput>;
};


export type MutationDeleteManyCondultasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CondultaManyWhereInput>;
};


export type MutationDeleteManyConsultasArgs = {
  where?: InputMaybe<ConsultaManyWhereInput>;
};


export type MutationDeleteManyConsultasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConsultaManyWhereInput>;
};


export type MutationDeleteManyFeedbacksArgs = {
  where?: InputMaybe<FeedbackManyWhereInput>;
};


export type MutationDeleteManyFeedbacksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FeedbackManyWhereInput>;
};


export type MutationDeleteManyForumsArgs = {
  where?: InputMaybe<ForumManyWhereInput>;
};


export type MutationDeleteManyForumsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ForumManyWhereInput>;
};


export type MutationDeleteManyLessonsArgs = {
  where?: InputMaybe<LessonManyWhereInput>;
};


export type MutationDeleteManyLessonsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonManyWhereInput>;
};


export type MutationDeleteManyLessonsevArgs = {
  where?: InputMaybe<LessonevManyWhereInput>;
};


export type MutationDeleteManyLessonsevConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonevManyWhereInput>;
};


export type MutationDeleteManyLessonsfoArgs = {
  where?: InputMaybe<LessonfoManyWhereInput>;
};


export type MutationDeleteManyLessonsfoConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonfoManyWhereInput>;
};


export type MutationDeleteManyOrientacaosArgs = {
  where?: InputMaybe<OrientacaoManyWhereInput>;
};


export type MutationDeleteManyOrientacaosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrientacaoManyWhereInput>;
};


export type MutationDeleteManyProductsArgs = {
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationDeleteManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationDeleteManySubscribersArgs = {
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationDeleteManySubscribersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationDeleteManySuplementosArgs = {
  where?: InputMaybe<SuplementoManyWhereInput>;
};


export type MutationDeleteManySuplementosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuplementoManyWhereInput>;
};


export type MutationDeleteManyTeachersArgs = {
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationDeleteManyTeachersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationDeleteOrientacaoArgs = {
  where: OrientacaoWhereUniqueInput;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteSubscriberArgs = {
  where: SubscriberWhereUniqueInput;
};


export type MutationDeleteSuplementoArgs = {
  where: SuplementoWhereUniqueInput;
};


export type MutationDeleteTeacherArgs = {
  where: TeacherWhereUniqueInput;
};


export type MutationPublishAlimentoArgs = {
  to?: Array<Stage>;
  where: AlimentoWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishAutropometriaArgs = {
  to?: Array<Stage>;
  where: AutropometriaWhereUniqueInput;
};


export type MutationPublishChallengeArgs = {
  to?: Array<Stage>;
  where: ChallengeWhereUniqueInput;
};


export type MutationPublishCondultaArgs = {
  to?: Array<Stage>;
  where: CondultaWhereUniqueInput;
};


export type MutationPublishConsultaArgs = {
  to?: Array<Stage>;
  where: ConsultaWhereUniqueInput;
};


export type MutationPublishFeedbackArgs = {
  to?: Array<Stage>;
  where: FeedbackWhereUniqueInput;
};


export type MutationPublishForumArgs = {
  to?: Array<Stage>;
  where: ForumWhereUniqueInput;
};


export type MutationPublishLessonArgs = {
  to?: Array<Stage>;
  where: LessonWhereUniqueInput;
};


export type MutationPublishLessonevArgs = {
  to?: Array<Stage>;
  where: LessonevWhereUniqueInput;
};


export type MutationPublishLessonfoArgs = {
  to?: Array<Stage>;
  where: LessonfoWhereUniqueInput;
};


export type MutationPublishManyAlimentosArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<AlimentoManyWhereInput>;
};


export type MutationPublishManyAlimentosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AlimentoManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAutropometriasArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<AutropometriaManyWhereInput>;
};


export type MutationPublishManyAutropometriasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AutropometriaManyWhereInput>;
};


export type MutationPublishManyChallengesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ChallengeManyWhereInput>;
};


export type MutationPublishManyChallengesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ChallengeManyWhereInput>;
};


export type MutationPublishManyCondultasArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CondultaManyWhereInput>;
};


export type MutationPublishManyCondultasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<CondultaManyWhereInput>;
};


export type MutationPublishManyConsultasArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ConsultaManyWhereInput>;
};


export type MutationPublishManyConsultasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ConsultaManyWhereInput>;
};


export type MutationPublishManyFeedbacksArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<FeedbackManyWhereInput>;
};


export type MutationPublishManyFeedbacksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<FeedbackManyWhereInput>;
};


export type MutationPublishManyForumsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ForumManyWhereInput>;
};


export type MutationPublishManyForumsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ForumManyWhereInput>;
};


export type MutationPublishManyLessonsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<LessonManyWhereInput>;
};


export type MutationPublishManyLessonsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<LessonManyWhereInput>;
};


export type MutationPublishManyLessonsevArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<LessonevManyWhereInput>;
};


export type MutationPublishManyLessonsevConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<LessonevManyWhereInput>;
};


export type MutationPublishManyLessonsfoArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<LessonfoManyWhereInput>;
};


export type MutationPublishManyLessonsfoConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<LessonfoManyWhereInput>;
};


export type MutationPublishManyOrientacaosArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<OrientacaoManyWhereInput>;
};


export type MutationPublishManyOrientacaosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<OrientacaoManyWhereInput>;
};


export type MutationPublishManyProductsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationPublishManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationPublishManySubscribersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationPublishManySubscribersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationPublishManySuplementosArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<SuplementoManyWhereInput>;
};


export type MutationPublishManySuplementosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<SuplementoManyWhereInput>;
};


export type MutationPublishManyTeachersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationPublishManyTeachersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationPublishOrientacaoArgs = {
  to?: Array<Stage>;
  where: OrientacaoWhereUniqueInput;
};


export type MutationPublishProductArgs = {
  to?: Array<Stage>;
  where: ProductWhereUniqueInput;
};


export type MutationPublishSubscriberArgs = {
  to?: Array<Stage>;
  where: SubscriberWhereUniqueInput;
};


export type MutationPublishSuplementoArgs = {
  to?: Array<Stage>;
  where: SuplementoWhereUniqueInput;
};


export type MutationPublishTeacherArgs = {
  to?: Array<Stage>;
  where: TeacherWhereUniqueInput;
};


export type MutationSchedulePublishAlimentoArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AlimentoWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishAutropometriaArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AutropometriaWhereUniqueInput;
};


export type MutationSchedulePublishChallengeArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ChallengeWhereUniqueInput;
};


export type MutationSchedulePublishCondultaArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CondultaWhereUniqueInput;
};


export type MutationSchedulePublishConsultaArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ConsultaWhereUniqueInput;
};


export type MutationSchedulePublishFeedbackArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: FeedbackWhereUniqueInput;
};


export type MutationSchedulePublishForumArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ForumWhereUniqueInput;
};


export type MutationSchedulePublishLessonArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: LessonWhereUniqueInput;
};


export type MutationSchedulePublishLessonevArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: LessonevWhereUniqueInput;
};


export type MutationSchedulePublishLessonfoArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: LessonfoWhereUniqueInput;
};


export type MutationSchedulePublishOrientacaoArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: OrientacaoWhereUniqueInput;
};


export type MutationSchedulePublishProductArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ProductWhereUniqueInput;
};


export type MutationSchedulePublishSubscriberArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: SubscriberWhereUniqueInput;
};


export type MutationSchedulePublishSuplementoArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: SuplementoWhereUniqueInput;
};


export type MutationSchedulePublishTeacherArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: TeacherWhereUniqueInput;
};


export type MutationScheduleUnpublishAlimentoArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: AlimentoWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishAutropometriaArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: AutropometriaWhereUniqueInput;
};


export type MutationScheduleUnpublishChallengeArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ChallengeWhereUniqueInput;
};


export type MutationScheduleUnpublishCondultaArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: CondultaWhereUniqueInput;
};


export type MutationScheduleUnpublishConsultaArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ConsultaWhereUniqueInput;
};


export type MutationScheduleUnpublishFeedbackArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: FeedbackWhereUniqueInput;
};


export type MutationScheduleUnpublishForumArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ForumWhereUniqueInput;
};


export type MutationScheduleUnpublishLessonArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: LessonWhereUniqueInput;
};


export type MutationScheduleUnpublishLessonevArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: LessonevWhereUniqueInput;
};


export type MutationScheduleUnpublishLessonfoArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: LessonfoWhereUniqueInput;
};


export type MutationScheduleUnpublishOrientacaoArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: OrientacaoWhereUniqueInput;
};


export type MutationScheduleUnpublishProductArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ProductWhereUniqueInput;
};


export type MutationScheduleUnpublishSubscriberArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: SubscriberWhereUniqueInput;
};


export type MutationScheduleUnpublishSuplementoArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: SuplementoWhereUniqueInput;
};


export type MutationScheduleUnpublishTeacherArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: TeacherWhereUniqueInput;
};


export type MutationUnpublishAlimentoArgs = {
  from?: Array<Stage>;
  where: AlimentoWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishAutropometriaArgs = {
  from?: Array<Stage>;
  where: AutropometriaWhereUniqueInput;
};


export type MutationUnpublishChallengeArgs = {
  from?: Array<Stage>;
  where: ChallengeWhereUniqueInput;
};


export type MutationUnpublishCondultaArgs = {
  from?: Array<Stage>;
  where: CondultaWhereUniqueInput;
};


export type MutationUnpublishConsultaArgs = {
  from?: Array<Stage>;
  where: ConsultaWhereUniqueInput;
};


export type MutationUnpublishFeedbackArgs = {
  from?: Array<Stage>;
  where: FeedbackWhereUniqueInput;
};


export type MutationUnpublishForumArgs = {
  from?: Array<Stage>;
  where: ForumWhereUniqueInput;
};


export type MutationUnpublishLessonArgs = {
  from?: Array<Stage>;
  where: LessonWhereUniqueInput;
};


export type MutationUnpublishLessonevArgs = {
  from?: Array<Stage>;
  where: LessonevWhereUniqueInput;
};


export type MutationUnpublishLessonfoArgs = {
  from?: Array<Stage>;
  where: LessonfoWhereUniqueInput;
};


export type MutationUnpublishManyAlimentosArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<AlimentoManyWhereInput>;
};


export type MutationUnpublishManyAlimentosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<AlimentoManyWhereInput>;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAutropometriasArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<AutropometriaManyWhereInput>;
};


export type MutationUnpublishManyAutropometriasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<AutropometriaManyWhereInput>;
};


export type MutationUnpublishManyChallengesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ChallengeManyWhereInput>;
};


export type MutationUnpublishManyChallengesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ChallengeManyWhereInput>;
};


export type MutationUnpublishManyCondultasArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CondultaManyWhereInput>;
};


export type MutationUnpublishManyCondultasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CondultaManyWhereInput>;
};


export type MutationUnpublishManyConsultasArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ConsultaManyWhereInput>;
};


export type MutationUnpublishManyConsultasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ConsultaManyWhereInput>;
};


export type MutationUnpublishManyFeedbacksArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<FeedbackManyWhereInput>;
};


export type MutationUnpublishManyFeedbacksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<FeedbackManyWhereInput>;
};


export type MutationUnpublishManyForumsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ForumManyWhereInput>;
};


export type MutationUnpublishManyForumsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ForumManyWhereInput>;
};


export type MutationUnpublishManyLessonsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<LessonManyWhereInput>;
};


export type MutationUnpublishManyLessonsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<LessonManyWhereInput>;
};


export type MutationUnpublishManyLessonsevArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<LessonevManyWhereInput>;
};


export type MutationUnpublishManyLessonsevConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<LessonevManyWhereInput>;
};


export type MutationUnpublishManyLessonsfoArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<LessonfoManyWhereInput>;
};


export type MutationUnpublishManyLessonsfoConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<LessonfoManyWhereInput>;
};


export type MutationUnpublishManyOrientacaosArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<OrientacaoManyWhereInput>;
};


export type MutationUnpublishManyOrientacaosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<OrientacaoManyWhereInput>;
};


export type MutationUnpublishManyProductsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUnpublishManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUnpublishManySubscribersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationUnpublishManySubscribersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationUnpublishManySuplementosArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<SuplementoManyWhereInput>;
};


export type MutationUnpublishManySuplementosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<SuplementoManyWhereInput>;
};


export type MutationUnpublishManyTeachersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationUnpublishManyTeachersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationUnpublishOrientacaoArgs = {
  from?: Array<Stage>;
  where: OrientacaoWhereUniqueInput;
};


export type MutationUnpublishProductArgs = {
  from?: Array<Stage>;
  where: ProductWhereUniqueInput;
};


export type MutationUnpublishSubscriberArgs = {
  from?: Array<Stage>;
  where: SubscriberWhereUniqueInput;
};


export type MutationUnpublishSuplementoArgs = {
  from?: Array<Stage>;
  where: SuplementoWhereUniqueInput;
};


export type MutationUnpublishTeacherArgs = {
  from?: Array<Stage>;
  where: TeacherWhereUniqueInput;
};


export type MutationUpdateAlimentoArgs = {
  data: AlimentoUpdateInput;
  where: AlimentoWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateAutropometriaArgs = {
  data: AutropometriaUpdateInput;
  where: AutropometriaWhereUniqueInput;
};


export type MutationUpdateChallengeArgs = {
  data: ChallengeUpdateInput;
  where: ChallengeWhereUniqueInput;
};


export type MutationUpdateCondultaArgs = {
  data: CondultaUpdateInput;
  where: CondultaWhereUniqueInput;
};


export type MutationUpdateConsultaArgs = {
  data: ConsultaUpdateInput;
  where: ConsultaWhereUniqueInput;
};


export type MutationUpdateFeedbackArgs = {
  data: FeedbackUpdateInput;
  where: FeedbackWhereUniqueInput;
};


export type MutationUpdateForumArgs = {
  data: ForumUpdateInput;
  where: ForumWhereUniqueInput;
};


export type MutationUpdateLessonArgs = {
  data: LessonUpdateInput;
  where: LessonWhereUniqueInput;
};


export type MutationUpdateLessonevArgs = {
  data: LessonevUpdateInput;
  where: LessonevWhereUniqueInput;
};


export type MutationUpdateLessonfoArgs = {
  data: LessonfoUpdateInput;
  where: LessonfoWhereUniqueInput;
};


export type MutationUpdateManyAlimentosArgs = {
  data: AlimentoUpdateManyInput;
  where?: InputMaybe<AlimentoManyWhereInput>;
};


export type MutationUpdateManyAlimentosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AlimentoUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AlimentoManyWhereInput>;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAutropometriasArgs = {
  data: AutropometriaUpdateManyInput;
  where?: InputMaybe<AutropometriaManyWhereInput>;
};


export type MutationUpdateManyAutropometriasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AutropometriaUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AutropometriaManyWhereInput>;
};


export type MutationUpdateManyChallengesArgs = {
  data: ChallengeUpdateManyInput;
  where?: InputMaybe<ChallengeManyWhereInput>;
};


export type MutationUpdateManyChallengesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ChallengeUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChallengeManyWhereInput>;
};


export type MutationUpdateManyCondultasArgs = {
  data: CondultaUpdateManyInput;
  where?: InputMaybe<CondultaManyWhereInput>;
};


export type MutationUpdateManyCondultasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: CondultaUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CondultaManyWhereInput>;
};


export type MutationUpdateManyConsultasArgs = {
  data: ConsultaUpdateManyInput;
  where?: InputMaybe<ConsultaManyWhereInput>;
};


export type MutationUpdateManyConsultasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ConsultaUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConsultaManyWhereInput>;
};


export type MutationUpdateManyFeedbacksArgs = {
  data: FeedbackUpdateManyInput;
  where?: InputMaybe<FeedbackManyWhereInput>;
};


export type MutationUpdateManyFeedbacksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: FeedbackUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FeedbackManyWhereInput>;
};


export type MutationUpdateManyForumsArgs = {
  data: ForumUpdateManyInput;
  where?: InputMaybe<ForumManyWhereInput>;
};


export type MutationUpdateManyForumsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ForumUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ForumManyWhereInput>;
};


export type MutationUpdateManyLessonsArgs = {
  data: LessonUpdateManyInput;
  where?: InputMaybe<LessonManyWhereInput>;
};


export type MutationUpdateManyLessonsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: LessonUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonManyWhereInput>;
};


export type MutationUpdateManyLessonsevArgs = {
  data: LessonevUpdateManyInput;
  where?: InputMaybe<LessonevManyWhereInput>;
};


export type MutationUpdateManyLessonsevConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: LessonevUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonevManyWhereInput>;
};


export type MutationUpdateManyLessonsfoArgs = {
  data: LessonfoUpdateManyInput;
  where?: InputMaybe<LessonfoManyWhereInput>;
};


export type MutationUpdateManyLessonsfoConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: LessonfoUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonfoManyWhereInput>;
};


export type MutationUpdateManyOrientacaosArgs = {
  data: OrientacaoUpdateManyInput;
  where?: InputMaybe<OrientacaoManyWhereInput>;
};


export type MutationUpdateManyOrientacaosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: OrientacaoUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrientacaoManyWhereInput>;
};


export type MutationUpdateManyProductsArgs = {
  data: ProductUpdateManyInput;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUpdateManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ProductUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUpdateManySubscribersArgs = {
  data: SubscriberUpdateManyInput;
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationUpdateManySubscribersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: SubscriberUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationUpdateManySuplementosArgs = {
  data: SuplementoUpdateManyInput;
  where?: InputMaybe<SuplementoManyWhereInput>;
};


export type MutationUpdateManySuplementosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: SuplementoUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SuplementoManyWhereInput>;
};


export type MutationUpdateManyTeachersArgs = {
  data: TeacherUpdateManyInput;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationUpdateManyTeachersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: TeacherUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationUpdateOrientacaoArgs = {
  data: OrientacaoUpdateInput;
  where: OrientacaoWhereUniqueInput;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateSubscriberArgs = {
  data: SubscriberUpdateInput;
  where: SubscriberWhereUniqueInput;
};


export type MutationUpdateSuplementoArgs = {
  data: SuplementoUpdateInput;
  where: SuplementoWhereUniqueInput;
};


export type MutationUpdateTeacherArgs = {
  data: TeacherUpdateInput;
  where: TeacherWhereUniqueInput;
};


export type MutationUpsertAlimentoArgs = {
  upsert: AlimentoUpsertInput;
  where: AlimentoWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAutropometriaArgs = {
  upsert: AutropometriaUpsertInput;
  where: AutropometriaWhereUniqueInput;
};


export type MutationUpsertChallengeArgs = {
  upsert: ChallengeUpsertInput;
  where: ChallengeWhereUniqueInput;
};


export type MutationUpsertCondultaArgs = {
  upsert: CondultaUpsertInput;
  where: CondultaWhereUniqueInput;
};


export type MutationUpsertConsultaArgs = {
  upsert: ConsultaUpsertInput;
  where: ConsultaWhereUniqueInput;
};


export type MutationUpsertFeedbackArgs = {
  upsert: FeedbackUpsertInput;
  where: FeedbackWhereUniqueInput;
};


export type MutationUpsertForumArgs = {
  upsert: ForumUpsertInput;
  where: ForumWhereUniqueInput;
};


export type MutationUpsertLessonArgs = {
  upsert: LessonUpsertInput;
  where: LessonWhereUniqueInput;
};


export type MutationUpsertLessonevArgs = {
  upsert: LessonevUpsertInput;
  where: LessonevWhereUniqueInput;
};


export type MutationUpsertLessonfoArgs = {
  upsert: LessonfoUpsertInput;
  where: LessonfoWhereUniqueInput;
};


export type MutationUpsertOrientacaoArgs = {
  upsert: OrientacaoUpsertInput;
  where: OrientacaoWhereUniqueInput;
};


export type MutationUpsertProductArgs = {
  upsert: ProductUpsertInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpsertSubscriberArgs = {
  upsert: SubscriberUpsertInput;
  where: SubscriberWhereUniqueInput;
};


export type MutationUpsertSuplementoArgs = {
  upsert: SuplementoUpsertInput;
  where: SuplementoWhereUniqueInput;
};


export type MutationUpsertTeacherArgs = {
  upsert: TeacherUpsertInput;
  where: TeacherWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

export type Orientacao = Node & {
  __typename?: 'Orientacao';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Orientacao>;
  /** List of Orientacao versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  subscriber?: Maybe<Subscriber>;
  titulo?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type OrientacaoCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type OrientacaoDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type OrientacaoHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type OrientacaoPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type OrientacaoScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type OrientacaoSubscriberArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type OrientacaoUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type OrientacaoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: OrientacaoWhereUniqueInput;
};

/** A connection to a list of items. */
export type OrientacaoConnection = {
  __typename?: 'OrientacaoConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<OrientacaoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type OrientacaoCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  subscriber?: InputMaybe<SubscriberCreateOneInlineInput>;
  titulo?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrientacaoCreateManyInlineInput = {
  /** Connect multiple existing Orientacao documents */
  connect?: InputMaybe<Array<OrientacaoWhereUniqueInput>>;
  /** Create and connect multiple existing Orientacao documents */
  create?: InputMaybe<Array<OrientacaoCreateInput>>;
};

export type OrientacaoCreateOneInlineInput = {
  /** Connect one existing Orientacao document */
  connect?: InputMaybe<OrientacaoWhereUniqueInput>;
  /** Create and connect one Orientacao document */
  create?: InputMaybe<OrientacaoCreateInput>;
};

/** An edge in a connection. */
export type OrientacaoEdge = {
  __typename?: 'OrientacaoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Orientacao;
};

/** Identifies documents */
export type OrientacaoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrientacaoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrientacaoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrientacaoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<OrientacaoWhereStageInput>;
  documentInStages_none?: InputMaybe<OrientacaoWhereStageInput>;
  documentInStages_some?: InputMaybe<OrientacaoWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  subscriber?: InputMaybe<SubscriberWhereInput>;
  titulo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  titulo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  titulo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  titulo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  titulo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  titulo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  titulo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  titulo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  titulo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  titulo_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum OrientacaoOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TituloAsc = 'titulo_ASC',
  TituloDesc = 'titulo_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type OrientacaoUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  subscriber?: InputMaybe<SubscriberUpdateOneInlineInput>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type OrientacaoUpdateManyInlineInput = {
  /** Connect multiple existing Orientacao documents */
  connect?: InputMaybe<Array<OrientacaoConnectInput>>;
  /** Create and connect multiple Orientacao documents */
  create?: InputMaybe<Array<OrientacaoCreateInput>>;
  /** Delete multiple Orientacao documents */
  delete?: InputMaybe<Array<OrientacaoWhereUniqueInput>>;
  /** Disconnect multiple Orientacao documents */
  disconnect?: InputMaybe<Array<OrientacaoWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Orientacao documents */
  set?: InputMaybe<Array<OrientacaoWhereUniqueInput>>;
  /** Update multiple Orientacao documents */
  update?: InputMaybe<Array<OrientacaoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Orientacao documents */
  upsert?: InputMaybe<Array<OrientacaoUpsertWithNestedWhereUniqueInput>>;
};

export type OrientacaoUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type OrientacaoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: OrientacaoUpdateManyInput;
  /** Document search */
  where: OrientacaoWhereInput;
};

export type OrientacaoUpdateOneInlineInput = {
  /** Connect existing Orientacao document */
  connect?: InputMaybe<OrientacaoWhereUniqueInput>;
  /** Create and connect one Orientacao document */
  create?: InputMaybe<OrientacaoCreateInput>;
  /** Delete currently connected Orientacao document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Orientacao document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Orientacao document */
  update?: InputMaybe<OrientacaoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Orientacao document */
  upsert?: InputMaybe<OrientacaoUpsertWithNestedWhereUniqueInput>;
};

export type OrientacaoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: OrientacaoUpdateInput;
  /** Unique document search */
  where: OrientacaoWhereUniqueInput;
};

export type OrientacaoUpsertInput = {
  /** Create document if it didn't exist */
  create: OrientacaoCreateInput;
  /** Update document if it exists */
  update: OrientacaoUpdateInput;
};

export type OrientacaoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: OrientacaoUpsertInput;
  /** Unique document search */
  where: OrientacaoWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type OrientacaoWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type OrientacaoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrientacaoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrientacaoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrientacaoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<OrientacaoWhereStageInput>;
  documentInStages_none?: InputMaybe<OrientacaoWhereStageInput>;
  documentInStages_some?: InputMaybe<OrientacaoWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  subscriber?: InputMaybe<SubscriberWhereInput>;
  titulo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  titulo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  titulo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  titulo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  titulo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  titulo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  titulo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  titulo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  titulo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  titulo_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type OrientacaoWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrientacaoWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrientacaoWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrientacaoWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<OrientacaoWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Orientacao record uniquely */
export type OrientacaoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Product = Node & {
  __typename?: 'Product';
  active?: Maybe<Scalars['Boolean']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Product>;
  /** List of Product versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  value?: Maybe<Scalars['Float']>;
};


export type ProductCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ProductHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ProductPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ProductUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductCreateInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type ProductCreateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Create and connect multiple existing Product documents */
  create?: InputMaybe<Array<ProductCreateInput>>;
};

export type ProductCreateOneInlineInput = {
  /** Connect one existing Product document */
  connect?: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>;
};

/** An edge in a connection. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Product;
};

/** Identifies documents */
export type ProductManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  active_not?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ProductWhereStageInput>;
  documentInStages_none?: InputMaybe<ProductWhereStageInput>;
  documentInStages_some?: InputMaybe<ProductWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  value?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  value_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  value_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  value_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  value_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  value_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export enum ProductOrderByInput {
  ActiveAsc = 'active_ASC',
  ActiveDesc = 'active_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type ProductUpdateInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type ProductUpdateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<ProductConnectInput>>;
  /** Create and connect multiple Product documents */
  create?: InputMaybe<Array<ProductCreateInput>>;
  /** Delete multiple Product documents */
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Disconnect multiple Product documents */
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Product documents */
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Update multiple Product documents */
  update?: InputMaybe<Array<ProductUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Product documents */
  upsert?: InputMaybe<Array<ProductUpsertWithNestedWhereUniqueInput>>;
};

export type ProductUpdateManyInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type ProductUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductUpdateManyInput;
  /** Document search */
  where: ProductWhereInput;
};

export type ProductUpdateOneInlineInput = {
  /** Connect existing Product document */
  connect?: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>;
  /** Delete currently connected Product document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Product document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Product document */
  update?: InputMaybe<ProductUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Product document */
  upsert?: InputMaybe<ProductUpsertWithNestedWhereUniqueInput>;
};

export type ProductUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductUpdateInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

export type ProductUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductCreateInput;
  /** Update document if it exists */
  update: ProductUpdateInput;
};

export type ProductUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductUpsertInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProductWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ProductWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  active_not?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ProductWhereStageInput>;
  documentInStages_none?: InputMaybe<ProductWhereStageInput>;
  documentInStages_some?: InputMaybe<ProductWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  value?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  value_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  value_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  value_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  value_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  value_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProductWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProductWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Product record uniquely */
export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single alimento */
  alimento?: Maybe<Alimento>;
  /** Retrieve document version */
  alimentoVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple alimentos */
  alimentos: Array<Alimento>;
  /** Retrieve multiple alimentos using the Relay connection interface */
  alimentosConnection: AlimentoConnection;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single autropometria */
  autropometria?: Maybe<Autropometria>;
  /** Retrieve document version */
  autropometriaVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple autropometrias */
  autropometrias: Array<Autropometria>;
  /** Retrieve multiple autropometrias using the Relay connection interface */
  autropometriasConnection: AutropometriaConnection;
  /** Retrieve a single challenge */
  challenge?: Maybe<Challenge>;
  /** Retrieve document version */
  challengeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple challenges */
  challenges: Array<Challenge>;
  /** Retrieve multiple challenges using the Relay connection interface */
  challengesConnection: ChallengeConnection;
  /** Retrieve a single condulta */
  condulta?: Maybe<Condulta>;
  /** Retrieve document version */
  condultaVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple condultas */
  condultas: Array<Condulta>;
  /** Retrieve multiple condultas using the Relay connection interface */
  condultasConnection: CondultaConnection;
  /** Retrieve a single consulta */
  consulta?: Maybe<Consulta>;
  /** Retrieve document version */
  consultaVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple consultas */
  consultas: Array<Consulta>;
  /** Retrieve multiple consultas using the Relay connection interface */
  consultasConnection: ConsultaConnection;
  /** Retrieve a single feedback */
  feedback?: Maybe<Feedback>;
  /** Retrieve document version */
  feedbackVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple feedbacks */
  feedbacks: Array<Feedback>;
  /** Retrieve multiple feedbacks using the Relay connection interface */
  feedbacksConnection: FeedbackConnection;
  /** Retrieve a single forum */
  forum?: Maybe<Forum>;
  /** Retrieve document version */
  forumVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple forums */
  forums: Array<Forum>;
  /** Retrieve multiple forums using the Relay connection interface */
  forumsConnection: ForumConnection;
  /** Retrieve a single lesson */
  lesson?: Maybe<Lesson>;
  /** Retrieve document version */
  lessonVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single lessonev */
  lessonev?: Maybe<Lessonev>;
  /** Retrieve document version */
  lessonevVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single lessonfo */
  lessonfo?: Maybe<Lessonfo>;
  /** Retrieve document version */
  lessonfoVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple lessons */
  lessons: Array<Lesson>;
  /** Retrieve multiple lessons using the Relay connection interface */
  lessonsConnection: LessonConnection;
  /** Retrieve multiple lessonsev */
  lessonsev: Array<Lessonev>;
  /** Retrieve multiple lessonsev using the Relay connection interface */
  lessonsevConnection: LessonevConnection;
  /** Retrieve multiple lessonsfo */
  lessonsfo: Array<Lessonfo>;
  /** Retrieve multiple lessonsfo using the Relay connection interface */
  lessonsfoConnection: LessonfoConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single orientacao */
  orientacao?: Maybe<Orientacao>;
  /** Retrieve document version */
  orientacaoVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple orientacaos */
  orientacaos: Array<Orientacao>;
  /** Retrieve multiple orientacaos using the Relay connection interface */
  orientacaosConnection: OrientacaoConnection;
  /** Retrieve a single product */
  product?: Maybe<Product>;
  /** Retrieve document version */
  productVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple products */
  products: Array<Product>;
  /** Retrieve multiple products using the Relay connection interface */
  productsConnection: ProductConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single subscriber */
  subscriber?: Maybe<Subscriber>;
  /** Retrieve document version */
  subscriberVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple subscribers */
  subscribers: Array<Subscriber>;
  /** Retrieve multiple subscribers using the Relay connection interface */
  subscribersConnection: SubscriberConnection;
  /** Retrieve a single suplemento */
  suplemento?: Maybe<Suplemento>;
  /** Retrieve document version */
  suplementoVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple suplementos */
  suplementos: Array<Suplemento>;
  /** Retrieve multiple suplementos using the Relay connection interface */
  suplementosConnection: SuplementoConnection;
  /** Retrieve a single teacher */
  teacher?: Maybe<Teacher>;
  /** Retrieve document version */
  teacherVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple teachers */
  teachers: Array<Teacher>;
  /** Retrieve multiple teachers using the Relay connection interface */
  teachersConnection: TeacherConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAlimentoArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AlimentoWhereUniqueInput;
};


export type QueryAlimentoVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAlimentosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AlimentoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AlimentoWhereInput>;
};


export type QueryAlimentosConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AlimentoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AlimentoWhereInput>;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAutropometriaArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AutropometriaWhereUniqueInput;
};


export type QueryAutropometriaVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAutropometriasArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AutropometriaOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AutropometriaWhereInput>;
};


export type QueryAutropometriasConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AutropometriaOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AutropometriaWhereInput>;
};


export type QueryChallengeArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ChallengeWhereUniqueInput;
};


export type QueryChallengeVersionArgs = {
  where: VersionWhereInput;
};


export type QueryChallengesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ChallengeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ChallengeWhereInput>;
};


export type QueryChallengesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ChallengeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ChallengeWhereInput>;
};


export type QueryCondultaArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CondultaWhereUniqueInput;
};


export type QueryCondultaVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCondultasArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CondultaOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CondultaWhereInput>;
};


export type QueryCondultasConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CondultaOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CondultaWhereInput>;
};


export type QueryConsultaArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ConsultaWhereUniqueInput;
};


export type QueryConsultaVersionArgs = {
  where: VersionWhereInput;
};


export type QueryConsultasArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ConsultaOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ConsultaWhereInput>;
};


export type QueryConsultasConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ConsultaOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ConsultaWhereInput>;
};


export type QueryFeedbackArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: FeedbackWhereUniqueInput;
};


export type QueryFeedbackVersionArgs = {
  where: VersionWhereInput;
};


export type QueryFeedbacksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FeedbackOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<FeedbackWhereInput>;
};


export type QueryFeedbacksConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FeedbackOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<FeedbackWhereInput>;
};


export type QueryForumArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ForumWhereUniqueInput;
};


export type QueryForumVersionArgs = {
  where: VersionWhereInput;
};


export type QueryForumsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ForumOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ForumWhereInput>;
};


export type QueryForumsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ForumOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ForumWhereInput>;
};


export type QueryLessonArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: LessonWhereUniqueInput;
};


export type QueryLessonVersionArgs = {
  where: VersionWhereInput;
};


export type QueryLessonevArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: LessonevWhereUniqueInput;
};


export type QueryLessonevVersionArgs = {
  where: VersionWhereInput;
};


export type QueryLessonfoArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: LessonfoWhereUniqueInput;
};


export type QueryLessonfoVersionArgs = {
  where: VersionWhereInput;
};


export type QueryLessonsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LessonOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<LessonWhereInput>;
};


export type QueryLessonsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LessonOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<LessonWhereInput>;
};


export type QueryLessonsevArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LessonevOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<LessonevWhereInput>;
};


export type QueryLessonsevConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LessonevOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<LessonevWhereInput>;
};


export type QueryLessonsfoArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LessonfoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<LessonfoWhereInput>;
};


export type QueryLessonsfoConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LessonfoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<LessonfoWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryOrientacaoArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: OrientacaoWhereUniqueInput;
};


export type QueryOrientacaoVersionArgs = {
  where: VersionWhereInput;
};


export type QueryOrientacaosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<OrientacaoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<OrientacaoWhereInput>;
};


export type QueryOrientacaosConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<OrientacaoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<OrientacaoWhereInput>;
};


export type QueryProductArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProductWhereUniqueInput;
};


export type QueryProductVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryProductsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QuerySubscriberArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SubscriberWhereUniqueInput;
};


export type QuerySubscriberVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySubscribersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SubscriberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<SubscriberWhereInput>;
};


export type QuerySubscribersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SubscriberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<SubscriberWhereInput>;
};


export type QuerySuplementoArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SuplementoWhereUniqueInput;
};


export type QuerySuplementoVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySuplementosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SuplementoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<SuplementoWhereInput>;
};


export type QuerySuplementosConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SuplementoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<SuplementoWhereInput>;
};


export type QueryTeacherArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TeacherWhereUniqueInput;
};


export type QueryTeacherVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTeachersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TeacherOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TeacherWhereInput>;
};


export type QueryTeachersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TeacherOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TeacherWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Alimento | Asset | Autropometria | Challenge | Condulta | Consulta | Feedback | Forum | Lesson | Lessonev | Lessonfo | Orientacao | Product | Subscriber | Suplemento | Teacher;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum Sexo {
  Feminino = 'feminino',
  Masculino = 'masculino'
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export type Subscriber = Node & {
  __typename?: 'Subscriber';
  alimento?: Maybe<Alimento>;
  autropometria?: Maybe<Autropometria>;
  avatar?: Maybe<Scalars['String']>;
  consulta?: Maybe<Consulta>;
  convenio?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  datadenascimento?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Subscriber>;
  email: Scalars['String'];
  endereco?: Maybe<Scalars['String']>;
  feedback?: Maybe<Feedback>;
  /** List of Subscriber versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  sexo?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  suplemento?: Maybe<Suplemento>;
  telefone?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type SubscriberAlimentoArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type SubscriberAutropometriaArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type SubscriberConsultaArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type SubscriberCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type SubscriberDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type SubscriberFeedbackArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type SubscriberHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type SubscriberPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type SubscriberScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type SubscriberSuplementoArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type SubscriberUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type SubscriberConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SubscriberWhereUniqueInput;
};

/** A connection to a list of items. */
export type SubscriberConnection = {
  __typename?: 'SubscriberConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SubscriberEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SubscriberCreateInput = {
  alimento?: InputMaybe<AlimentoCreateOneInlineInput>;
  autropometria?: InputMaybe<AutropometriaCreateOneInlineInput>;
  avatar?: InputMaybe<Scalars['String']>;
  cl9qdzlfp0qal01t64qu6dz8x?: InputMaybe<ConsultaCreateManyInlineInput>;
  cl9qek3fw0ryr01uk88825qt5?: InputMaybe<OrientacaoCreateManyInlineInput>;
  cl56w6esz46w901t8c5yj8dvn?: InputMaybe<FeedbackCreateManyInlineInput>;
  consulta?: InputMaybe<ConsultaCreateOneInlineInput>;
  convenio?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  datadenascimento?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  endereco?: InputMaybe<Scalars['String']>;
  feedback?: InputMaybe<FeedbackCreateOneInlineInput>;
  name: Scalars['String'];
  sexo?: InputMaybe<Scalars['String']>;
  suplemento?: InputMaybe<SuplementoCreateOneInlineInput>;
  telefone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SubscriberCreateManyInlineInput = {
  /** Connect multiple existing Subscriber documents */
  connect?: InputMaybe<Array<SubscriberWhereUniqueInput>>;
  /** Create and connect multiple existing Subscriber documents */
  create?: InputMaybe<Array<SubscriberCreateInput>>;
};

export type SubscriberCreateOneInlineInput = {
  /** Connect one existing Subscriber document */
  connect?: InputMaybe<SubscriberWhereUniqueInput>;
  /** Create and connect one Subscriber document */
  create?: InputMaybe<SubscriberCreateInput>;
};

/** An edge in a connection. */
export type SubscriberEdge = {
  __typename?: 'SubscriberEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Subscriber;
};

/** Identifies documents */
export type SubscriberManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SubscriberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SubscriberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SubscriberWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  alimento?: InputMaybe<AlimentoWhereInput>;
  autropometria?: InputMaybe<AutropometriaWhereInput>;
  avatar?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  avatar_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  avatar_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  avatar_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  avatar_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  avatar_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  avatar_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  avatar_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  avatar_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  avatar_starts_with?: InputMaybe<Scalars['String']>;
  consulta?: InputMaybe<ConsultaWhereInput>;
  convenio?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  convenio_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  convenio_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  convenio_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  convenio_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  convenio_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  convenio_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  convenio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  convenio_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  convenio_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  datadenascimento?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  datadenascimento_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  datadenascimento_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  datadenascimento_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  datadenascimento_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  datadenascimento_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  datadenascimento_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  datadenascimento_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  datadenascimento_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  datadenascimento_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<SubscriberWhereStageInput>;
  documentInStages_none?: InputMaybe<SubscriberWhereStageInput>;
  documentInStages_some?: InputMaybe<SubscriberWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  endereco?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  endereco_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  endereco_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  endereco_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  endereco_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  endereco_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  endereco_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  endereco_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  endereco_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  endereco_starts_with?: InputMaybe<Scalars['String']>;
  feedback?: InputMaybe<FeedbackWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  sexo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  sexo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  sexo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  sexo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  sexo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  sexo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  sexo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  sexo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  sexo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  sexo_starts_with?: InputMaybe<Scalars['String']>;
  suplemento?: InputMaybe<SuplementoWhereInput>;
  telefone?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  telefone_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  telefone_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  telefone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  telefone_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  telefone_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  telefone_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  telefone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  telefone_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  telefone_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum SubscriberOrderByInput {
  AvatarAsc = 'avatar_ASC',
  AvatarDesc = 'avatar_DESC',
  ConvenioAsc = 'convenio_ASC',
  ConvenioDesc = 'convenio_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DatadenascimentoAsc = 'datadenascimento_ASC',
  DatadenascimentoDesc = 'datadenascimento_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  EnderecoAsc = 'endereco_ASC',
  EnderecoDesc = 'endereco_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SexoAsc = 'sexo_ASC',
  SexoDesc = 'sexo_DESC',
  TelefoneAsc = 'telefone_ASC',
  TelefoneDesc = 'telefone_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SubscriberUpdateInput = {
  alimento?: InputMaybe<AlimentoUpdateOneInlineInput>;
  autropometria?: InputMaybe<AutropometriaUpdateOneInlineInput>;
  avatar?: InputMaybe<Scalars['String']>;
  cl9qdzlfp0qal01t64qu6dz8x?: InputMaybe<ConsultaUpdateManyInlineInput>;
  cl9qek3fw0ryr01uk88825qt5?: InputMaybe<OrientacaoUpdateManyInlineInput>;
  cl56w6esz46w901t8c5yj8dvn?: InputMaybe<FeedbackUpdateManyInlineInput>;
  consulta?: InputMaybe<ConsultaUpdateOneInlineInput>;
  convenio?: InputMaybe<Scalars['String']>;
  datadenascimento?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  endereco?: InputMaybe<Scalars['String']>;
  feedback?: InputMaybe<FeedbackUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']>;
  sexo?: InputMaybe<Scalars['String']>;
  suplemento?: InputMaybe<SuplementoUpdateOneInlineInput>;
  telefone?: InputMaybe<Scalars['String']>;
};

export type SubscriberUpdateManyInlineInput = {
  /** Connect multiple existing Subscriber documents */
  connect?: InputMaybe<Array<SubscriberConnectInput>>;
  /** Create and connect multiple Subscriber documents */
  create?: InputMaybe<Array<SubscriberCreateInput>>;
  /** Delete multiple Subscriber documents */
  delete?: InputMaybe<Array<SubscriberWhereUniqueInput>>;
  /** Disconnect multiple Subscriber documents */
  disconnect?: InputMaybe<Array<SubscriberWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Subscriber documents */
  set?: InputMaybe<Array<SubscriberWhereUniqueInput>>;
  /** Update multiple Subscriber documents */
  update?: InputMaybe<Array<SubscriberUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Subscriber documents */
  upsert?: InputMaybe<Array<SubscriberUpsertWithNestedWhereUniqueInput>>;
};

export type SubscriberUpdateManyInput = {
  avatar?: InputMaybe<Scalars['String']>;
  convenio?: InputMaybe<Scalars['String']>;
  datadenascimento?: InputMaybe<Scalars['String']>;
  endereco?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  sexo?: InputMaybe<Scalars['String']>;
  telefone?: InputMaybe<Scalars['String']>;
};

export type SubscriberUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SubscriberUpdateManyInput;
  /** Document search */
  where: SubscriberWhereInput;
};

export type SubscriberUpdateOneInlineInput = {
  /** Connect existing Subscriber document */
  connect?: InputMaybe<SubscriberWhereUniqueInput>;
  /** Create and connect one Subscriber document */
  create?: InputMaybe<SubscriberCreateInput>;
  /** Delete currently connected Subscriber document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Subscriber document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Subscriber document */
  update?: InputMaybe<SubscriberUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Subscriber document */
  upsert?: InputMaybe<SubscriberUpsertWithNestedWhereUniqueInput>;
};

export type SubscriberUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SubscriberUpdateInput;
  /** Unique document search */
  where: SubscriberWhereUniqueInput;
};

export type SubscriberUpsertInput = {
  /** Create document if it didn't exist */
  create: SubscriberCreateInput;
  /** Update document if it exists */
  update: SubscriberUpdateInput;
};

export type SubscriberUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SubscriberUpsertInput;
  /** Unique document search */
  where: SubscriberWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type SubscriberWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type SubscriberWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SubscriberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SubscriberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SubscriberWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  alimento?: InputMaybe<AlimentoWhereInput>;
  autropometria?: InputMaybe<AutropometriaWhereInput>;
  avatar?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  avatar_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  avatar_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  avatar_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  avatar_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  avatar_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  avatar_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  avatar_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  avatar_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  avatar_starts_with?: InputMaybe<Scalars['String']>;
  consulta?: InputMaybe<ConsultaWhereInput>;
  convenio?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  convenio_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  convenio_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  convenio_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  convenio_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  convenio_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  convenio_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  convenio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  convenio_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  convenio_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  datadenascimento?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  datadenascimento_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  datadenascimento_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  datadenascimento_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  datadenascimento_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  datadenascimento_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  datadenascimento_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  datadenascimento_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  datadenascimento_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  datadenascimento_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<SubscriberWhereStageInput>;
  documentInStages_none?: InputMaybe<SubscriberWhereStageInput>;
  documentInStages_some?: InputMaybe<SubscriberWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  endereco?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  endereco_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  endereco_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  endereco_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  endereco_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  endereco_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  endereco_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  endereco_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  endereco_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  endereco_starts_with?: InputMaybe<Scalars['String']>;
  feedback?: InputMaybe<FeedbackWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  sexo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  sexo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  sexo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  sexo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  sexo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  sexo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  sexo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  sexo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  sexo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  sexo_starts_with?: InputMaybe<Scalars['String']>;
  suplemento?: InputMaybe<SuplementoWhereInput>;
  telefone?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  telefone_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  telefone_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  telefone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  telefone_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  telefone_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  telefone_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  telefone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  telefone_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  telefone_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type SubscriberWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SubscriberWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SubscriberWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SubscriberWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<SubscriberWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Subscriber record uniquely */
export type SubscriberWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type Suplemento = Node & {
  __typename?: 'Suplemento';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Suplemento>;
  /** List of Suplemento versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  nome: Scalars['String'];
  principioativo?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type SuplementoCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type SuplementoDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type SuplementoHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type SuplementoPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type SuplementoScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type SuplementoUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type SuplementoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SuplementoWhereUniqueInput;
};

/** A connection to a list of items. */
export type SuplementoConnection = {
  __typename?: 'SuplementoConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SuplementoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SuplementoCreateInput = {
  cl9q194lq0dop01te5g6w7uh9?: InputMaybe<SubscriberCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  nome: Scalars['String'];
  principioativo?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SuplementoCreateManyInlineInput = {
  /** Connect multiple existing Suplemento documents */
  connect?: InputMaybe<Array<SuplementoWhereUniqueInput>>;
  /** Create and connect multiple existing Suplemento documents */
  create?: InputMaybe<Array<SuplementoCreateInput>>;
};

export type SuplementoCreateOneInlineInput = {
  /** Connect one existing Suplemento document */
  connect?: InputMaybe<SuplementoWhereUniqueInput>;
  /** Create and connect one Suplemento document */
  create?: InputMaybe<SuplementoCreateInput>;
};

/** An edge in a connection. */
export type SuplementoEdge = {
  __typename?: 'SuplementoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Suplemento;
};

/** Identifies documents */
export type SuplementoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SuplementoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SuplementoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SuplementoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<SuplementoWhereStageInput>;
  documentInStages_none?: InputMaybe<SuplementoWhereStageInput>;
  documentInStages_some?: InputMaybe<SuplementoWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  nome?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  nome_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  nome_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nome_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  nome_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  nome_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  nome_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  nome_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  nome_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  nome_starts_with?: InputMaybe<Scalars['String']>;
  principioativo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  principioativo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  principioativo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  principioativo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  principioativo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  principioativo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  principioativo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  principioativo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  principioativo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  principioativo_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum SuplementoOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NomeAsc = 'nome_ASC',
  NomeDesc = 'nome_DESC',
  PrincipioativoAsc = 'principioativo_ASC',
  PrincipioativoDesc = 'principioativo_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SuplementoUpdateInput = {
  cl9q194lq0dop01te5g6w7uh9?: InputMaybe<SubscriberUpdateManyInlineInput>;
  description?: InputMaybe<Scalars['String']>;
  nome?: InputMaybe<Scalars['String']>;
  principioativo?: InputMaybe<Scalars['String']>;
};

export type SuplementoUpdateManyInlineInput = {
  /** Connect multiple existing Suplemento documents */
  connect?: InputMaybe<Array<SuplementoConnectInput>>;
  /** Create and connect multiple Suplemento documents */
  create?: InputMaybe<Array<SuplementoCreateInput>>;
  /** Delete multiple Suplemento documents */
  delete?: InputMaybe<Array<SuplementoWhereUniqueInput>>;
  /** Disconnect multiple Suplemento documents */
  disconnect?: InputMaybe<Array<SuplementoWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Suplemento documents */
  set?: InputMaybe<Array<SuplementoWhereUniqueInput>>;
  /** Update multiple Suplemento documents */
  update?: InputMaybe<Array<SuplementoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Suplemento documents */
  upsert?: InputMaybe<Array<SuplementoUpsertWithNestedWhereUniqueInput>>;
};

export type SuplementoUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  nome?: InputMaybe<Scalars['String']>;
  principioativo?: InputMaybe<Scalars['String']>;
};

export type SuplementoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SuplementoUpdateManyInput;
  /** Document search */
  where: SuplementoWhereInput;
};

export type SuplementoUpdateOneInlineInput = {
  /** Connect existing Suplemento document */
  connect?: InputMaybe<SuplementoWhereUniqueInput>;
  /** Create and connect one Suplemento document */
  create?: InputMaybe<SuplementoCreateInput>;
  /** Delete currently connected Suplemento document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Suplemento document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Suplemento document */
  update?: InputMaybe<SuplementoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Suplemento document */
  upsert?: InputMaybe<SuplementoUpsertWithNestedWhereUniqueInput>;
};

export type SuplementoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SuplementoUpdateInput;
  /** Unique document search */
  where: SuplementoWhereUniqueInput;
};

export type SuplementoUpsertInput = {
  /** Create document if it didn't exist */
  create: SuplementoCreateInput;
  /** Update document if it exists */
  update: SuplementoUpdateInput;
};

export type SuplementoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SuplementoUpsertInput;
  /** Unique document search */
  where: SuplementoWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type SuplementoWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type SuplementoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SuplementoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SuplementoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SuplementoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  documentInStages_every?: InputMaybe<SuplementoWhereStageInput>;
  documentInStages_none?: InputMaybe<SuplementoWhereStageInput>;
  documentInStages_some?: InputMaybe<SuplementoWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  nome?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  nome_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  nome_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nome_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  nome_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  nome_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  nome_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  nome_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  nome_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  nome_starts_with?: InputMaybe<Scalars['String']>;
  principioativo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  principioativo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  principioativo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  principioativo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  principioativo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  principioativo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  principioativo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  principioativo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  principioativo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  principioativo_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type SuplementoWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SuplementoWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SuplementoWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SuplementoWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<SuplementoWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Suplemento record uniquely */
export type SuplementoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type Teacher = Node & {
  __typename?: 'Teacher';
  avatarURL: Scalars['String'];
  bio: Scalars['String'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Teacher>;
  /** List of Teacher versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  lessons: Array<Lesson>;
  name: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type TeacherCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type TeacherDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type TeacherHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type TeacherLessonsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<LessonOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonWhereInput>;
};


export type TeacherPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type TeacherScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type TeacherUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type TeacherConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TeacherWhereUniqueInput;
};

/** A connection to a list of items. */
export type TeacherConnection = {
  __typename?: 'TeacherConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TeacherEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TeacherCreateInput = {
  avatarURL: Scalars['String'];
  bio: Scalars['String'];
  cl65j1b1499a801t5gcnk16nw?: InputMaybe<LessonevCreateManyInlineInput>;
  cl67logbbbwbj01uk5ymjahvh?: InputMaybe<LessonfoCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lessons?: InputMaybe<LessonCreateManyInlineInput>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TeacherCreateManyInlineInput = {
  /** Connect multiple existing Teacher documents */
  connect?: InputMaybe<Array<TeacherWhereUniqueInput>>;
  /** Create and connect multiple existing Teacher documents */
  create?: InputMaybe<Array<TeacherCreateInput>>;
};

export type TeacherCreateOneInlineInput = {
  /** Connect one existing Teacher document */
  connect?: InputMaybe<TeacherWhereUniqueInput>;
  /** Create and connect one Teacher document */
  create?: InputMaybe<TeacherCreateInput>;
};

/** An edge in a connection. */
export type TeacherEdge = {
  __typename?: 'TeacherEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Teacher;
};

/** Identifies documents */
export type TeacherManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TeacherWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TeacherWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TeacherWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  avatarURL?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  avatarURL_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  avatarURL_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  avatarURL_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  avatarURL_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  avatarURL_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  avatarURL_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  avatarURL_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  avatarURL_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  avatarURL_starts_with?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  bio_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  bio_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bio_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  bio_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  bio_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  bio_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  bio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  bio_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  bio_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<TeacherWhereStageInput>;
  documentInStages_none?: InputMaybe<TeacherWhereStageInput>;
  documentInStages_some?: InputMaybe<TeacherWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  lessons_every?: InputMaybe<LessonWhereInput>;
  lessons_none?: InputMaybe<LessonWhereInput>;
  lessons_some?: InputMaybe<LessonWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum TeacherOrderByInput {
  AvatarUrlAsc = 'avatarURL_ASC',
  AvatarUrlDesc = 'avatarURL_DESC',
  BioAsc = 'bio_ASC',
  BioDesc = 'bio_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TeacherUpdateInput = {
  avatarURL?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  cl65j1b1499a801t5gcnk16nw?: InputMaybe<LessonevUpdateManyInlineInput>;
  cl67logbbbwbj01uk5ymjahvh?: InputMaybe<LessonfoUpdateManyInlineInput>;
  lessons?: InputMaybe<LessonUpdateManyInlineInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type TeacherUpdateManyInlineInput = {
  /** Connect multiple existing Teacher documents */
  connect?: InputMaybe<Array<TeacherConnectInput>>;
  /** Create and connect multiple Teacher documents */
  create?: InputMaybe<Array<TeacherCreateInput>>;
  /** Delete multiple Teacher documents */
  delete?: InputMaybe<Array<TeacherWhereUniqueInput>>;
  /** Disconnect multiple Teacher documents */
  disconnect?: InputMaybe<Array<TeacherWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Teacher documents */
  set?: InputMaybe<Array<TeacherWhereUniqueInput>>;
  /** Update multiple Teacher documents */
  update?: InputMaybe<Array<TeacherUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Teacher documents */
  upsert?: InputMaybe<Array<TeacherUpsertWithNestedWhereUniqueInput>>;
};

export type TeacherUpdateManyInput = {
  avatarURL?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type TeacherUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TeacherUpdateManyInput;
  /** Document search */
  where: TeacherWhereInput;
};

export type TeacherUpdateOneInlineInput = {
  /** Connect existing Teacher document */
  connect?: InputMaybe<TeacherWhereUniqueInput>;
  /** Create and connect one Teacher document */
  create?: InputMaybe<TeacherCreateInput>;
  /** Delete currently connected Teacher document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Teacher document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Teacher document */
  update?: InputMaybe<TeacherUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Teacher document */
  upsert?: InputMaybe<TeacherUpsertWithNestedWhereUniqueInput>;
};

export type TeacherUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TeacherUpdateInput;
  /** Unique document search */
  where: TeacherWhereUniqueInput;
};

export type TeacherUpsertInput = {
  /** Create document if it didn't exist */
  create: TeacherCreateInput;
  /** Update document if it exists */
  update: TeacherUpdateInput;
};

export type TeacherUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TeacherUpsertInput;
  /** Unique document search */
  where: TeacherWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type TeacherWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type TeacherWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TeacherWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TeacherWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TeacherWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  avatarURL?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  avatarURL_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  avatarURL_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  avatarURL_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  avatarURL_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  avatarURL_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  avatarURL_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  avatarURL_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  avatarURL_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  avatarURL_starts_with?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  bio_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  bio_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bio_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  bio_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  bio_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  bio_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  bio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  bio_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  bio_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<TeacherWhereStageInput>;
  documentInStages_none?: InputMaybe<TeacherWhereStageInput>;
  documentInStages_some?: InputMaybe<TeacherWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  lessons_every?: InputMaybe<LessonWhereInput>;
  lessons_none?: InputMaybe<LessonWhereInput>;
  lessons_some?: InputMaybe<LessonWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type TeacherWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TeacherWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TeacherWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TeacherWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<TeacherWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Teacher record uniquely */
export type TeacherWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type CreateProductMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
  active?: InputMaybe<Scalars['Boolean']>;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct?: { __typename?: 'Product', id: string } | null };

export type DeleteProductMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct?: { __typename?: 'Product', id: string } | null };

export type UpdateProductMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
  active?: InputMaybe<Scalars['Boolean']>;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct?: { __typename?: 'Product', id: string } | null };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, name?: string | null, value?: number | null, active?: boolean | null }> };


export const CreateProductDocument = gql`
    mutation createProduct($name: String, $value: Float, $active: Boolean) {
  createProduct(data: {name: $name, value: $value, active: $active}) {
    id
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      name: // value for 'name'
 *      value: // value for 'value'
 *      active: // value for 'active'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const DeleteProductDocument = gql`
    mutation deleteProduct($id: ID) {
  deleteProduct(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation updateProduct($id: ID, $name: String, $value: Float, $active: Boolean) {
  updateProduct(
    data: {active: $active, name: $name, value: $value}
    where: {id: $id}
  ) {
    id
  }
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      value: // value for 'value'
 *      active: // value for 'active'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const GetProductsDocument = gql`
    query getProducts {
  products(orderBy: name_ASC) {
    id
    name
    value
    active
  }
}
    `;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;