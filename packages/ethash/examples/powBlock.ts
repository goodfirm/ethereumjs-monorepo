import { Ethash } from '@ethereumjs/ethash'
import { Block } from '@ethereumjs/block'
import { DBObject, hexToBytes, MapDB } from '@ethereumjs/util'

const cacheDB = new MapDB<number, DBObject>()

const ethash = new Ethash(cacheDB)
const validblockRlp =
  '0xf90667f905fba0a8d5b7a4793baaede98b5236954f634a0051842df6a252f6a80492fd888678bda01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347948888f1f195afa192cfee860698584c030f4c9db1a0f93c8db1e931daa2e22e39b5d2da6fb4074e3d544094857608536155e3521bc1a0bb7495628f9160ddbcf6354380ee32c300d594e833caec3a428041a66e7bade1a0c7778a7376099ee2e5c455791c1885b5c361b95713fddcbe32d97fd01334d296b90100000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000400000000000000000000000000000000000000000000000000000008302000001832fefd882560b84559c17b9b9040001020304050607080910111213141516171819202122232410000000000000000000200000000000000000003000000000000000000040000000000000000000500000000000000000006000000000000000000070000000000000000000800000000000000000009000000000000000000010000000000000000000100000000000000000002000000000000000000030000000000000000000400000000000000000005000000000000000000060000000000000000000700000000000000000008000000000000000000090000000000000000000100000000000000000001000000000000000000020000000000000000000300000000000000000004000000000000000000050000000000000000000600000000000000000007000000000000000000080000000000000000000900000000000000000001000000000000000000010000000000000000000200000000000000000003000000000000000000040000000000000000000500000000000000000006000000000000000000070000000000000000000800000000000000000009000000000000000000010000000000000000000100000000000000000002000000000000000000030000000000000000000400000000000000000005000000000000000000060000000000000000000700000000000000000008000000000000000000090000000000000000000100000000000000000001000000000000000000020000000000000000000300000000000000000004000000000000000000050000000000000000000600000000000000000007000000000000000000080000000000000000000900000000000000000001000000000000000000010000000000000000000200000000000000000003000000000000000000040000000000000000000500000000000000000006000000000000000000070000000000000000000800000000000000000009000000000000000000010000000000000000000100000000000000000002000000000000000000030000000000000000000400000000000000000005000000000000000000060000000000000000000700000000000000000008000000000000000000090000000000000000000100000000000000000001000000000000000000020000000000000000000300000000000000000004000000000000000000050000000000000000000600000000000000000007000000000000000000080000000000000000000900000000000000000001000000000000000000010000000000000000000200000000000000000003000000000000000000040000000000000000000500000000000000000006000000000000000000070000000000000000000800000000000000000009000000000000000000010000000000000000000a09c7b47112a3afb385c12924bf6280d273c106eea7caeaf5131d8776f61056c148876ae05d46b58d1fff866f864800a82c35094095e7baea6a6c7c4c2dfeb977efac326af552d8785012a05f200801ba01d2c92cfaeb04e53acdff2b5d42005ff6aacdb0105e64eb8c30c273f445d2782a01e7d50ffce57840360c57d94977b8cdebde614da23e8d1e77dc07928763cfe21c0'

const validBlock = Block.fromRLPSerializedBlock(hexToBytes(validblockRlp), {
  setHardfork: true,
  skipConsensusFormatValidation: true,
})

const result = await ethash.verifyPOW(validBlock)
console.log(result) // => true