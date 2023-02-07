import { UserModule, GlobalModule } from './user'
import { readonly } from 'vue'

export default readonly({
  User: UserModule,
  Global: GlobalModule
})
