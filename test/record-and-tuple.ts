const proposal = #{
  id: 1234,
  title: 'Record & Tuple proposal',
  contents: `...`,
  // tuples are primitive types so you can put them in records:
  keywords: #['ecma', 'tc39', 'proposal', 'record', 'tuple'],
}

export default [proposal.title, proposal.keywords[1]]
