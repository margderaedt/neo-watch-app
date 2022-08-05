import { StyleSheet } from 'react-native';

export const theme = StyleSheet.create({
  container: {

  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 24,
  },
  welcomeLayout: {
    width: '100%',
    backgroundColor: '#000',
    flex: 1,
  },
  welcomeLayoutImage: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 4,
    elevation: 3,
    zIndex: 3,
    backgroundColor: '#FFF',
  },
  buttonPressed: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 4,
    elevation: 3,
    zIndex: 3,
    backgroundColor: '#5234EB',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#000',
  }
});
