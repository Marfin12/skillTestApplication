// @flow

export type Data = {|
  image: string,
  description: string
|}

export type Props = {|
  route: {|
    params: {|
      props: Data
    |}
  |}
|};
