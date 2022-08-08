import { StyleSheet } from 'react-native';

export const theme = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: '#000',
    paddingBottom: 24,
    paddingTop: 24,
  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 24,
    paddingTop: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    color: '#f0ece1',
    paddingBottom: 16,
    paddingTop: 16,
    fontWeight: 'bold',
  },
  layout: {
    width: '100%',
    backgroundColor: '#000',
    flex: 1,
  },
  homeScreenImage: {
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
    marginBottom: 16,
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
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#000',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  link: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    elevation: 3,
    width: 300,
    zIndex: 3,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },
  linkPressed: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    elevation: 3,
    width: 300,
    zIndex: 3,
    backgroundColor: '#5234EB',
    marginBottom: 16,
  },
  linkText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#000',
  },
  keyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  valueText: {
    fontSize: 16,
    color: '#FFF',
  },
  warningText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f24235',
  },
  successText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3cbd49',
  },
  infoContainer: {
    paddingBottom: 16,
    alignItems: 'center',
  }
});
