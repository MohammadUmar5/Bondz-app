import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  LayoutAnimation,
  Modal,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

type Person = {
  name: string;
  avatar: string;
};

type Collection = {
  title: string;
  color: string;
  people: Person[];
};

interface Props {
  item: Collection;
  index: number;
  isExpanded: boolean;
  expandedIndex: number | null;
  onPress: (index: number) => void;
}

export const MemoryCard: React.FC<Props> = ({
  item,
  index,
  isExpanded,
  expandedIndex,
  onPress,
}) => {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  
  const isAfterExpanded = expandedIndex !== null && index > expandedIndex;

  let marginTop = 0;
  if (index === 0) marginTop = 20;
  else if (isExpanded) marginTop = -20;
  else if (isAfterExpanded) marginTop = expandedIndex === index - 1 ? 80 : -40;
  else marginTop = -20;

  // Enhanced gradient colors based on the main color
  const getGradientColors = (color: string) => {
    switch (color) {
      case "#8B5CF6": return ["#8B5CF6", "#A855F7", "#C084FC"] as const;
      case "#10B981": return ["#10B981", "#34D399", "#6EE7B7"] as const;
      case "#3B82F6": return ["#3B82F6", "#60A5FA", "#93C5FD"] as const;
      case "#F59E0B": return ["#F59E0B", "#FBBF24", "#FCD34D"] as const;
      case "#EF4444": return ["#EF4444", "#F87171", "#FCA5A5"] as const;
      default: return [color, color] as const;
    }
  };

  const cardStyle = {
    marginTop,
    ...(isExpanded && {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.25,
      shadowRadius: 12,
      elevation: 12,
    }),
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        onPress(index);
      }}
      style={[styles.card, cardStyle]}
    >
      <LinearGradient
        colors={getGradientColors(item.color)}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBackground}
      >
        {/* Decorative pattern overlay */}
        <View style={styles.patternOverlay}>
          <View style={styles.decorativeCircle1} />
          <View style={styles.decorativeCircle2} />
          <View style={styles.decorativeCircle3} />
        </View>

        <View style={styles.cardContent}>
          <View>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.peopleCount}>
              {item.people.length} member{item.people.length > 1 ? 's' : ''}
            </Text>
          </View>
          
          {/* Avatar stack preview */}
          <View style={styles.avatarStack}>
            {item.people.slice(0, 3).map((person, idx) => (
              <Image
                key={idx}
                source={{ uri: person.avatar }}
                style={[
                  styles.avatarPreview,
                  { 
                    marginLeft: idx > 0 ? -12 : 0,
                    zIndex: 3 - idx,
                    borderColor: item.color,
                  }
                ]}
              />
            ))}
            {item.people.length > 3 && (
              <View style={[styles.moreAvatars, { backgroundColor: item.color }]}>
                <Text style={styles.moreText}>+{item.people.length - 3}</Text>
              </View>
            )}
          </View>
        </View>

        {isExpanded && (
          <View style={styles.expandedContent}>
            <View style={styles.divider} />
            <Text style={styles.sectionTitle}>Members</Text>
            <View style={styles.peopleList}>
              {item.people.map((person, personIndex) => (
                <TouchableOpacity 
                  key={personIndex} 
                  style={styles.personItem}
                  onPress={() => setSelectedPerson(person)}
                >
                  <Image
                    source={{ uri: person.avatar }}
                    style={styles.personAvatar}
                  />
                  <Text style={styles.personName}>{person.name}</Text>
                  <View style={styles.chevron}>
                    <Text style={styles.chevronText}>›</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      </LinearGradient>

      <Modal
        visible={selectedPerson !== null}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => setSelectedPerson(null)}
            >
              <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>
              {selectedPerson?.name}
            </Text>
            <View style={styles.placeholder} />
          </View>
          <View style={styles.modalContent}>
            <Text style={styles.placeholderText}>
              Content for {selectedPerson?.name} goes here
            </Text>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    marginBottom: 0,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  gradientBackground: {
    padding: 24,
    paddingBottom: 28,
    position: 'relative',
  },
  patternOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
  },
  decorativeCircle1: {
    position: 'absolute',
    top: -20,
    right: -20,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  decorativeCircle2: {
    position: 'absolute',
    bottom: -30,
    left: -30,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  decorativeCircle3: {
    position: 'absolute',
    top: '50%',
    right: -40,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  peopleCount: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
    fontWeight: "500",
  },
  avatarStack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarPreview: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  moreAvatars: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -12,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  moreText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFF',
  },
  expandedContent: {
    marginTop: 20,
    zIndex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  peopleList: {
    gap: 12,
  },
  personItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 16,
  },
  personAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 16,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  personName: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "600",
    flex: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  chevron: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chevronText: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '300',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  modalHeader: {
    height: "15%",
    backgroundColor: "#f8f9fa",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonText: {
    fontSize: 24,
    color: "#007AFF",
    fontWeight: "600",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    flex: 1,
  },
  placeholder: {
    width: 40,
  },
  modalContent: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});