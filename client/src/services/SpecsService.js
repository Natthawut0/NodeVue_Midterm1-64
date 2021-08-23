import Api from '@/services/Api'

export default {
  index () {
    return Api().get('specs')
  },
  show (specId) {
    return Api().get('spec/'+specId)
  },
  post (spec) {
    return Api().post('spec',spec)
  },
  put (spec) {
    return Api().put('spec/'+spec.id, spec)
  },
  delete (spec) {
    return Api().delete('spec/'+spec.id, spec)
  },
}
