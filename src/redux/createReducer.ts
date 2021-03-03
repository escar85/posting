type Reducer<State> = (state: State, action: any) => State
type Handlers<State> = { [key: string]: Reducer<State> }

// eslint-disable-next-line import/no-anonymous-default-export
export default <State>(initialState: State, handlers: Handlers<State>): Reducer<State> => (
  state = initialState,
  action,
) => (Object.prototype.hasOwnProperty.call(handlers, action.type) ? handlers[action.type](state, action) : state)
