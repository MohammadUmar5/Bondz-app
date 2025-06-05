import { StyleSheet, Dimensions, Platform } from 'react-native';
import { COLORS } from '../constants/colors';

const { width } = Dimensions.get('window');

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG,
    width: width,
    maxWidth: width,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.BG,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    width: width,
    maxWidth: width,
  },
  headerContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: COLORS.TEXT_PRIMARY,
    fontFamily: Platform.OS === "ios" ? "System" : "Roboto",
    textAlign: "center",
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
    marginTop: 4,
    fontWeight: "400",
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: COLORS.TEXT_SECONDARY,
    fontWeight: "400",
  },
  emptyContainer: {
    padding: 40,
    alignItems: "center",
    width: "100%",
  },
  emptyText: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: 16,
    textAlign: "center",
  },
});